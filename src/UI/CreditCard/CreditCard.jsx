import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import './CreditCard.scss'

const CreditCard = () => {
    const { users, activeUser } = useContext(UserContext);
    const getUser = users.find(user => user.number.includes(activeUser.number))
 
    return (
        <>
        <div className="wrapper">
            <div className="cc mastercard">
                <svg width="295" height="87">
                <path d="M 0 0 C 50 50 250 0 300 87"></path>
                </svg>
                <div className="container">
                <div className="type">PIE <i className="fas fa-pizza-slice"></i></div>
                <div className="circuit">
                <i className="fab fa-cc-mastercard fa-2x"></i>
                </div>
                </div>
                <div className="holder">
                <span className="name">{getUser.name}</span>
                <span className="number">0122 - 1026 - 0616 - 0817</span>
                </div>
            </div>
            <div className="shop-icons">
                <div className='icon-name'>
                    <i className="fas fa-shopping-cart"></i>
                    <span>Cart</span>
                </div>
                <div className='icon-name'>
                    <i className="fas fa-clipboard-list"></i>
                    <span>Wish</span>
                    <span>List</span>
                </div>
            </div>
            <div className="subscription">
                <h2><i className="far fa-credit-card"></i> Subscriptions</h2>
                <div className="items">
                    <i className="fab fa-spotify"></i>
                    <span>Spotify Premium</span>
                    <span>PHP 129.00/month</span>
                </div>
                <div className="items">
                    <i className="fab fa-youtube"></i>
                    <span>YouTube Premium</span>
                    <span>PHP 159.00/month</span>
                </div>
                <div className="items">
                    <i className="fab fa-aws"></i>
                    <span>Aws Services</span>
                    <span>PHP 1,429.00/year</span>
                </div>
                <div className="items">
                    <i className="fab fa-discord"></i>
                    <span>Discord Nitro</span>
                    <span>PHP 499.00/month</span>
                </div>
            </div>
        </div>

 

        </>
    )
}

export default CreditCard;
