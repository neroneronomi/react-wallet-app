import React, { createContext, useState, useEffect } from 'react';
export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [users, setUsers] = useState(() => {
        const localData = localStorage.getItem('users');
        return localData ? JSON.parse(localData) : []
    });

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users])

    const [activeUser, setActiveUser ] = useState(() => {
        const localData = localStorage.getItem('activeUser');
        return localData ? JSON.parse(localData) : {}
    });
    
    useEffect(() => {
        localStorage.setItem('activeUser', JSON.stringify(activeUser))
    }, [activeUser])

    let now = new Date();
    let dateNow = now.toLocaleDateString();
    let timeNow = now.toLocaleTimeString('en-GB');

    const addUser = (name, number, password) => {
         setUsers([...users, {name, number, password, balance: 0, history: []}]);
    };
    const loginUser = (number, password) => {
        setActiveUser({number, password})
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
            alert('Error')
        } else {
            reciever['balance'] = parseInt(reciever['balance'] += parseInt(amount));
            setUsers([
                ...users.slice(0, getIndex),
                reciever,
                ...users.slice(getIndex + 1)
            ]);
            activeUser.balance = parseInt(activeUser.balance += parseInt(amount));
            recieveRecord.unshift({type:'RECIEVED', source:'ADMIN', amount: amount, date: dateNow, time: timeNow})
            alert(amount + ' is added to wallet');
        }
    };
    const sendBalance = (number, amount) => {
        const getIndexReciever = users.findIndex (user => user.number === number);
        const getIndexSender = users.findIndex (user => user.number === activeUser.number);
        if(getIndexReciever !== -1) {

            const getUserReciever = users.find(user => user.number.includes(number));
            const getUserSender = users.find(user => user.number.includes(activeUser.number));
            let recieveRecord = getUserReciever.history
            let sendRecord = getUserSender.history
            let reciever = users[getIndexReciever];
            let sender = users[getIndexSender];

            if (getUserSender.balance < amount) {
                alert('Not enough balance')
            } else {
                if (activeUser.number === number) {
                    alert(`You can't send to your own wallet! WTF`)
                } else if(getIndexReciever === -1) {
                    alert('Error that hopefuly do not happen')
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
                    recieveRecord.unshift({type:'RECIEVED', source:activeUser.number, amount: amount, date: dateNow, time: timeNow})
                    sendRecord.unshift({type:'SENT', source:getUserReciever.number, amount: amount, date: dateNow, time: timeNow})
                    alert(amount + ' is sent to ' + number);
                }
            }
        } else {
            alert('Number not yet registered')
        }
    };

    const nowx = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateNowx = nowx.toLocaleDateString(undefined, options);
    let timeNowx = nowx.toLocaleTimeString('en-GB');

    const [date, setDate ] = useState();
    const [time, setTime ] = useState();

    setTimeout(() => {
        setTime(timeNowx);
        setDate(dateNowx);
      }, 1000);

    return (
        <UserContext.Provider value={{
            users, activeUser, addUser, loginUser,
            logoutUser, addBalance, sendBalance, date, time
            }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserContextProvider;