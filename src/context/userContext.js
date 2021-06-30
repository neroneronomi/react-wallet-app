import React, { createContext, useState } from 'react';

export const UserContext = createContext();


const UserContextProvider = (props) => {
    const [users, setUsers] = useState([
        {name:'Oliver Nero', number:'09089885559', password: 'password123', balance: 100, history: [{}]},
        {name:'Luffy', number:'09178191189', password: 'password1234', balance: 0, history: [{}]}
    ]);
    const [activeUser, setActiveUser ] = useState({});

    let now = new Date();
    let dateNow = now.toLocaleDateString();
    let timeNow = now.toLocaleTimeString();

    const addUser = (name, number, password) => {
        const getIndex = users.findIndex(user => user.number === number)
         if (getIndex === -1){
            setUsers([...users, {name, number, password, balance: 0}]);
            console.log('User added');
         } else {
            console.log('Number already exist');
        }       
    };
    const loginUser = (number, password) => {
        const getUser = users.find(user => user.number.includes(number))
        if (getUser === undefined ) {
            console.log('Number not yet registered')
        } else if (getUser.password === password) {
            setActiveUser({number, password, name: getUser.name, balance: getUser.balance})
            console.log('You are logged in')
        } else {
            console.log('Incorrect Password')
        }
    };
    const logoutUser = () => {
        setActiveUser({})
    };
    const addBalance = (amount) => {
        const getIndex = users.findIndex (user => user.number === activeUser.number);
        const getUser = users.find(user => user.number.includes(activeUser.number));
        let recieveRecord = getUser.history
        let reciever = users[getIndex]

        if ( getIndex === -1 ) {
            console.log('Error')
        } else {
            reciever['balance'] = parseInt(reciever['balance'] += parseInt(amount));
            setUsers([
                ...users.slice(0, getIndex),
                reciever,
                ...users.slice(getIndex + 1)
            ]);
            activeUser.balance = parseInt(activeUser.balance += parseInt(amount));
            recieveRecord.push({type:'recieve', source:'ADMIN', amount: amount, date: dateNow, time: timeNow})
            console.log(amount + ' is added to wallet');
        }
    };
    const sendBalance = (number, amount) => {
        const getIndexReciever = users.findIndex (user => user.number === number);
        const getIndexSender = users.findIndex (user => user.number === activeUser.number);
        const getUserReciever = users.find(user => user.number.includes(number));
        const getUserSender = users.find(user => user.number.includes(activeUser.number));
        let recieveRecord = getUserReciever.history
        let sendRecord = getUserSender.history
        let reciever = users[getIndexReciever];
        let sender = users[getIndexSender];
        if(getIndexReciever !== -1) {
            if (activeUser.balance < amount) {
                console.log('Not enough balance')
            } else {
                if (activeUser.number === number) {
                    console.log(`You can't send to your own wallet! WTF`)
                } else if(getIndexReciever === -1) {
                    console.log('Error that hopefuly do not happen')
                } else {
                    reciever['balance'] = parseInt(reciever['balance'] += parseInt(amount))
                    setUsers([
                        ...users.slice(0, getIndexReciever),
                        reciever,
                        ...users.slice(getIndexReciever + 1)
                    ]);
                    sender['balance'] = parseInt(sender['balance'] -= parseInt(amount))
                    setUsers([
                        ...users.slice(0, getIndexSender),
                        sender,
                        ...users.slice(getIndexSender + 1)
                    ]);
                    activeUser.balance = parseInt(activeUser.balance -= parseInt(amount));
                    recieveRecord.push({type:'recieved', source:activeUser.number, amount: amount, date: dateNow, time: timeNow})
                    sendRecord.push({type:'sent', source:'My Wallet', amount: amount, date: dateNow, time: timeNow})
                    console.log(amount + ' is sent to ' + number);
                }
            }
        } else {
            console.log('Number not yet registered')
        }
    };
    return (
        <UserContext.Provider value={{
            users, activeUser, addUser, loginUser,
            logoutUser, addBalance, sendBalance
            }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserContextProvider;