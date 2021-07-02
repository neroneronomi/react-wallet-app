import useSignup from "./useSignUp";


const SignupMultiStep = () => {
    const { handleSubmit, handleChange, next, prev, step, values } = useSignup()
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
                        value={values.number}
                        onChange={handleChange}
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
                        value={values.name}
                        onChange={handleChange}
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
                        value={values.password}
                        onChange={handleChange}
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
