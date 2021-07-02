import useLogin from "./useLogin";
import "./LoginForm.scss";

const LoginForm = () => {
    const { handleSubmit, handleChange, values } = useLogin()
    return (
        <>
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-content">
                <input 
                    className="login-input" 
                    type="number"
                    name="number"
                    placeholder="Number"  
                    required
                    value={values.number}
                    onChange={handleChange}
                />
                   <div className="underline"></div>
                {/* {errors.number && <p className="login-error">{errors.number}</p>} */}
            </div>

            <div className="login-content">
                <input 
                    className="login-input" 
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={values.password}
                    onChange={handleChange}
                />
                   <div className="underline"></div>
                {/* {errors.password && <p className="login-error">{errors.password}</p>} */}
            </div>
            <div className="login-btn-container">
                <button className='login-btn' type='submit'>Sign In</button>
            </div>
        </form>
  
    </>
    )
}

export default LoginForm
