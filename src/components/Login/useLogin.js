import { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../context/userContext';

const useLogin = () => {
    const { users, loginUser } = useContext(UserContext);
    const [values, setValues] = useState({
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
        const getUser = users.find(user => user.number.includes(values.number))
        if (getUser === undefined ) {
            alert('Number not yet registered')
        } else if (getUser.password === values.password) {
            loginUser(values.number, values.password)
            history.push("/wallet");
        } else {
            alert('Incorrect Password')
        }
    };
    return { handleSubmit, handleChange, values }
}

export default useLogin;
