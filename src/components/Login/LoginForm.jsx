import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import "./LoginForm.scss";

const LoginForm = () => {
    const { loginUser } = useContext(UserContext);
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(number, password)
        setNumber('');
        setPassword('');
    };
    return (
        <>
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-content">
                {/* <label className="login-label">
                    Phone Number:
                </label> */}
                <input 
                    className="login-input" 
                    type="number"
                    name="number"
                    placeholder="Number"  
                    required
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                   <div className="underline"></div>
                {/* {errors.number && <p className="login-error">{errors.number}</p>} */}
            </div>

            <div className="login-content">
                {/* <label className="login-label">
                    Password:
                </label> */}
                <input 
                    className="login-input" 
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                   <div className="underline"></div>
                {/* {errors.password && <p className="login-error">{errors.password}</p>} */}
            </div>
            <div className="login-btn-container">
                <button className='login-btn' type='submit'>LOGIN</button>
            </div>
        </form>
  
    </>
    )
}

export default LoginForm
