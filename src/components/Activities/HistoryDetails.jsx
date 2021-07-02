import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

const HistoryDetails = () => {
    const { users, activeUser } = useContext(UserContext);
    const getUser = users.find(user => user.number.includes(activeUser.number))
    const histories = getUser.history


    return (
        <>
        {histories.slice(0,6).map((history) => (
        <div className="history-details" key={history.time}>
            <ul>
                <li>
                    <h4 className='type' style={history.type.includes('SENT') ? {color: "red"} : {color: "green"}}>
                        {history.type}
                    </h4>
                    <h4 className='source'>{history.source}</h4>
                    <h4 className='amount' style={history.type.includes('SENT') ? {color: "red"} : {color: "green"}}>
                        {history.amount}
                    </h4>
                    <h4 className='date'>{history.date}</h4>
                    <h4 className='time'>{history.time}</h4> 
                </li>
            </ul>
        </div>
        ))}  
        </>
    )
}

export default HistoryDetails;
