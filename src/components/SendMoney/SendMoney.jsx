import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import './SendMoney.scss';

const SendMoney = () => {
    const { sendBalance } = useContext(UserContext);
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        sendBalance(number, amount)
    };
    return (
    <div className='sm-container'>
        <form className="sm-form" onSubmit={handleSubmit}>
            <br />
            <h3>Send Money</h3>
            <div className="sm-content">
                <label className="sm-label">
                    Send to: 
                </label>
                <input 
                    className="sm-input" 
                    type="number"
                    name="amount"
                    placeholder="Enter Reciever Number"
                    required
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>

            <div className="sm-content">
                <label className="sm-label">
                    Amount: 
                </label>
                <input 
                    className="sm-input" 
                    type="number"
                    name="amount"
                    placeholder="Enter Amount"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
                <button className='sm-btn' type='submit'>Send Money</button>
         </form>
    </div>
    )
}

export default SendMoney;
