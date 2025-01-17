import React, {useContext, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userContext } from "../../context/userContext";

const Register = (props) => {
    const {user, setUser} = useContext(userContext)
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert("All fields are required.");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        axios.post('http://localhost:8000/api/v1/register', {firstName, lastName, email, password, confirmPassword}, {withCredentials:true})
            .then((res) => {
                setUser(res.data);
                navigate('/home')
            })
            .catch((err) => {
                if (err.response && err.response.data) {
                    alert(err.response.data.message || "An error occurred. Please try again.");
                } else {
                    console.error(err);
                }
            })
        console.log({ firstName, lastName, email, password, confirmPassword }); // Log the form data

    }

    return (
        <form onSubmit={submitHandler}>
            <h1>Register</h1>
            <div>
                <label>First Name</label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button>Register</button>
            <Link to="/">Already have an account?</Link>
        </form>
    )
}

export default Register;