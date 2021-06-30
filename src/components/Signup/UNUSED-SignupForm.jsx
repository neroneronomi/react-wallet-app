import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import "./SignupForm.scss";

const SignupForm = () => {
    const { addUser } = useContext(UserContext);
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(name, number, password);
        setName('');
        setNumber('');
        setPassword('');
    };
    return (
        <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
            <div className="signup-content">
                <input 
                    className="signup-input" 
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeholder="Enter Name"
                    required  
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {/* {errors.firstname && <p className="signup-error">{errors.firstname}</p>} */}
            </div>

            <div className="signup-content">
                <input 
                    className="signup-input" 
                    type="number"
                    name="number"
                    autoComplete="off"
                    placeholder="Enter Phone Number"
                    required
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                {/* {errors.number && <p className="signup-error">{errors.number}</p>} */}
            </div>

            <div className="signup-content">
                <input 
                    className="signup-input" 
                    type="password"
                    name="password"
                    autoComplete="off"
                    placeholder="Enter Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* {errors.password && <p className="signup-error">{errors.password}</p>} */}
            </div>
            <button className='signup-btn' type='submit'>Sign up</button>
        </form>
    </div>
    )
}

export default SignupForm;
