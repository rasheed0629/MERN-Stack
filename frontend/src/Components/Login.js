import React, { useState } from 'react'
import './Login.css';
import axios from "axios"
// import {createBrowserHistory} from "history";
import { useNavigate } from "react-router-dom";
// import { ReactPropTypes } from 'react';

const Login = ({ setLoginUser }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const { email, password } = user;

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const login = () => {

        axios.post("http://localhost:9000/login", user)
            .then(res => {
                alert(res.data.message)
                // setLoginUser(res.data.user)
                navigate("/")
            })
            .catch((e)=>{
                console.log("error occured");
            })
    }
    return (
        <div className="lg">
            <div className="login">
                <h1>Login</h1>

                <input type="text" name="email" value={email} onChange={handleChange} placeholder="Enter your Email"></input>
                <input type="password" name="password" value={password} onChange={handleChange} placeholder="Enter your Password" ></input>
                <div className="button" onClick={login}>Login</div>
                <div>or</div>
                <div className="button" onClick={() => navigate("/register")}>Register</div>

            </div>
        </div>
    )
}

export default Login