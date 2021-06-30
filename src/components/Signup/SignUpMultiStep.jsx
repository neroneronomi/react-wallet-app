import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';

const SignupMultiStep = () => {
    const { addUser } = useContext(UserContext);
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [step, setStep] = useState(1)
    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(name, 0 + number, password);
        setName('');
        setNumber('');
        setPassword('');
    };

    const next = (e) => {
        e.preventDefault()
        let currentStep = step
        currentStep = step >= 2 ? 3 : currentStep + 1
        setStep(currentStep)
    };

    const prev = (e) => {
        e.preventDefault()
        let currentStep = step
        currentStep = step <= 1 ? 1 : currentStep - 1
        setStep(currentStep)
    };

    return (
        <>
        <form className="signup-form" onSubmit={handleSubmit}>
          {(() => {
            if (step === 1) {
                return <>
                <div className="signup-content">
                    <input 
                        className="signup-input" 
                        type="number"
                        name="number"
                        autoComplete="off"
                        placeholder="Enter Number"
                        required  
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <div className="underline"></div>
                    {/* {errors.firstname && <p className="signup-error">{errors.firstname}</p>} */}
                </div>
                <div className='input-span'><span>eg: 09151234567</span></div>
                <div className="input-btn-container">
                <button className="nextBtn" type='button' onClick={next}>Next</button>
                </div>
                
                        </>
            } else if (step === 2) {
                return <>
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
                    <div className="underline"></div>
                    {/* {errors.firstname && <p className="signup-error">{errors.firstname}</p>} */}
                </div>
                <div className='input-span'><span>eg: Jane Smith</span></div>
                <div className="input-btn-container">
                <button className='prevBtn' type='button' onClick={prev}>Prev</button>
                <button className="nextBtn" type='button' onClick={next}>Next</button>
                </div>
                        </>
                        
            } else if (step === 3) {
                return <>
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
                    <div className="underline"></div>
                    {/* {errors.firstname && <p className="signup-error">{errors.firstname}</p>} */}
                </div>
                <div className='input-span'><span>eg: passWord123</span></div>
                <div className="input-btn-container">
                <button className='prevBtn' type='button' onClick={prev}>Prev</button>
                <button className='signup-btn' type='submit'>Submit</button>
                </div>
                </>           
            }
            })()}
        </form>
        </>
    )
}

export default SignupMultiStep;
