import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import HistoryDetails from './HistoryDetails';
import './RecentActivities.scss'

const RecentActivities = () => {
    const { users, activeUser } = useContext(UserContext);
    const getUser = users.find(user => user.number.includes(activeUser.number))
    const history = getUser.history

    
    return (
        <>
        <div className="history-container">
            <div className="history-list">
            <h2><i className="fas fa-wallet"></i> Recent Activities</h2>
                {(() => {
                  if (history.length === 0) {
                return <h1>No Activities Yet</h1>;
                } else {
                return <HistoryDetails />
                }
                })()}
            </div>
        </div>
        </>
    )
}

export default RecentActivities;
