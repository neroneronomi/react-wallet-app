import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import './MenuTab.scss';

const MenuTab = () => {

    const { date, time } = useContext(UserContext);

    return (
        <div className='menu-container'>
            <div className="time-container">
                <h2 className='date'>{date}</h2>  
                <h2 className='time'>{time}</h2>
            </div>
            <div className="menu-icons">
                <div className='icon-name'>
                <i className="fas fa-house-user"></i>
                <span>Home</span>
                </div>
                <div className='icon-name'>
                <i className="fas fa-landmark"></i>
                <span>Bank</span>
                <span>Transfer</span>
                </div>
                <div className='icon-name'>
                <i className="fas fa-scroll"></i>
                <span>Pay</span>
                <span>Bills</span>
                </div>
                <div className='icon-name'>
                <i className="fas fa-mobile-alt"></i>
                <span>Load</span>
                </div>
                <div className='icon-name'>
                <i className="fas fa-cog"></i>
                <span>Settings</span>
                </div>
            </div>
        </div>
    )
}

export default MenuTab;

