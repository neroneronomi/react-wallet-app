import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import './AddMoney.scss';

const AddMoney = () => {
    const { addBalance } = useContext(UserContext);
    const [amount, setAmount] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addBalance(amount)
        setAmount("");
    };
    return (
        <div className='am-container'>
        <form className="am-form" onSubmit={handleSubmit}>
            <h3><i className="fas fa-donate"></i> Add Credit</h3>
            <div className="am-input-container">
            <div className="am-dropdown">
                <select className='am-option'>
                    <option value=''>PIE Admin</option>
                    <option disabled>Bank Account</option>
                    <option disabled>7-Eleven</option>
                    <option disabled>Debit or Credit Card</option>
                </select>
            </div>

            <div className="amount">
                <input 
                    className="am-input" 
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <button className='am-btn' type='submit'><i className="fas fa-money-bill-wave"></i> Recieve </button>
            </div>
        </form>
    </div>
    )
}

export default AddMoney;
