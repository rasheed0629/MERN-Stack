import React from 'react'
import './Register.css';
import axios from "axios"
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
const Register = () => {
    const navigate=useNavigate();

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        repass: "",
    })
    const { name, email, password, repass } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const register=()=>{
      
        if(name && email && password && (password===repass))
        {
            axios.post("http://localhost:9000/register",data)
            .then(res=>alert(res.data.message))
           
        }
        else{
            alert("please check all fields")
        }
    }
    return (
        <div className="register">
            <h1>Register</h1>
                <input type="text" name="name" value={name} placeholder="Your Name" onChange={changeHandler}></input>
                <input type="text" name="email" value={email} placeholder="Your Email" onChange={changeHandler} ></input>
                <input type="password" name="password" value={password} placeholder="Your Password" onChange={changeHandler}></input>
                <input type="password" name="repass" value={repass} placeholder="Re-enter Password" onChange={changeHandler}></input>
                <div className="button" onClick={register}>Register</div>
                <div>or</div>
                <div className="button" onClick={() => navigate("/login")}>Login</div>
           
        </div>
    )
}

export default Register