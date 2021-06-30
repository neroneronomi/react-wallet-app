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
            <br />
            <h3>Add Money</h3>
            <div className="am-content">
                <label className="am-label">
                    Amount: 
                </label>
                <input 
                    className="am-input" 
                    type="number"
                    name="amount"
                    placeholder="Enter Amount"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <button className='am-btn' type='submit'>Add Money</button>
        </form>
    </div>
    )
}

export default AddMoney;
