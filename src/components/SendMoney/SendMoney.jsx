import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import './SendMoney.scss';

const SendMoney = () => {
    const { sendBalance } = useContext(UserContext);
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        sendBalance(number, amount);
        setNumber("");
        setAmount("")
    };
    return (
    <div className='sm-container'>
        <form className="sm-form" onSubmit={handleSubmit}>
            <h3><i className="fas fa-exchange-alt"></i>Quick Transfer</h3>
            <div className="sm-input-container">
            <div className="recipient">
                <input 
                    className="sm-input" 
                    type="number"
                    name="amount"
                    placeholder="Recipient Number"
                    required
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>
            <div className="amount">
                <input 
                    className="sm-input" 
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
                <button className='sm-btn' type='submit'><i className="fas fa-share-square"></i> Send</button>
            </div>
         </form>
    </div>
    )
}

export default SendMoney;
