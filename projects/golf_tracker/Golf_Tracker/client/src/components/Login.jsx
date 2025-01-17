import React, {useContext, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userContext } from "../../context/userContext";

const Login = (props) => {
    const {user, setUser} = useContext(userContext)
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const submitHandler =  (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/v1/login', {email,password}, {withCredentials:true})
            .then((res) => {
                console.log(res);
                setUser(res.data);
                navigate('/home');
            })
            .catch((err) => {
                if (err.response && err.response.data) {
                    alert(err.response.data.message || "An error occurred. Please try again.");
                } else {
                    console.error(err);
                }
            });
    }
    return (
        <form onSubmit={submitHandler}>
            <h1>Login</h1>
            <div>
                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button>Login</button>
            <Link to="/register">Don't have an account</Link>
        </form>
    )
}

export default Login;