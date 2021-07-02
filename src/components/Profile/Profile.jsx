import { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../context/userContext';
import './Profile.scss'

const Profile = () => {
    const { users, activeUser, logoutUser } = useContext(UserContext);
    const getUser = users.find(user => user.number.includes(activeUser.number))
    let history = useHistory();
    let userBalance = getUser.balance;
    let balance = userBalance.toLocaleString()

    const handleLogout = (e) => {
        e.preventDefault();
        logoutUser(); 
        history.push("/");
        alert('You are logged out')
      
    }


    return (
        <div className='profile-container'>
            <div className="profile-bar">
                <h1 className='profile-logo'>PIE <i className="fas fa-pizza-slice"></i></h1>
                <div className='profile-name'>
                    <h2>Welcome,</h2>
                    <h1>{getUser.name}</h1>
                </div>
                <div className='profile-number'>
                    <h4>Account Number :</h4>
                    <h2>{getUser.number}</h2> 
                </div>
                <div className='profile-balance'>
                    <h4>Available Balance :</h4>
                    <h2>PHP {balance}</h2>
                    
                </div>
                <div className='profile-btn'>
                <button className='logout-btn' type='button' onClick={handleLogout}><i className="fas fa-sign-out-alt"></i> Sign out</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;
