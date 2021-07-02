import { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../context/userContext';

const useSignup = () => {

    const { users, addUser, loginUser } = useContext(UserContext);
    const [step, setStep] = useState(1)
    const [values, setValues] = useState({
        name: "",
        number: "",
        password: "",
    });

    let history = useHistory();

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const getIndex = users.findIndex(user => user.number === values.number)
        if (getIndex === -1){
            addUser(values.name, values.number, values.password);
            loginUser(values.number, values.password)
            history.push("/wallet");
          
        
        } else {
           alert('Number already registered');
       }       

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

    return { handleSubmit, handleChange, next, prev, step, values }
}

export default useSignup; 
