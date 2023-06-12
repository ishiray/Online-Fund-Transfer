import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AES, enc } from 'crypto-js';
import './login.css'

const secretKey = 'Hello';

const encryptData = (data) => {
    const encryptedData = AES.encrypt(data, secretKey).toString();
    return encryptedData;
  };

export const Register = (props) => {
    const history=useNavigate();

    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');
    // const [name, setName] = useState('');
    const [input, setInput] = useState({
        
        email: '',
        password: '',
        username: '',
        number:'',
        account:'',
        pin:''
        
    })
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(email);
    // }
    function handleChange(event) {
        const {name, value} = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }
    // function submit(event) {
    //     event.preventDefault();
    //     const newInfo = {
    //         email: input.email,
    //         password: input.password,
    //         username: input.username
    //     }
    //     console.log("no")
    //     axios.post('http://localhost:3001/register', newInfo)
        
            
        
        
    // }

    function submit(e){
        e.preventDefault();
        const encryptedPin = encryptData(input.pin);
        console.log(1);
        const newInfo = {
            email: input.email,
            password: input.password,
            number: input.number,
            account: input.account,
            pin: encryptedPin

        }
        axios.post("http://localhost:3001/register", newInfo)
        .then(res=>{
            console.log(3);
            if(res.data==="exist"){
                console.log("exists");
                alert("User already exists");
            }
            else{
                history("/");
            }
        })
    }
    //     try{
            
            
    //         .then(res=>{
    //             if(res.data==="exist"){
    //                 alert("User already exists")
    //             }
    //             else if(res.data==="not exist"){
    //                 newInfo.save();
    //                 history("/transfer")
    //             }
    //         })
    //         .catch(e=>{
    //             alert("wrong details")
    //             console.log(e);
    //         })
    //     }
    //     catch(e) {
    //         console.log(e)
    //     }
    // }
    return (
        <div className="App">
            <div className="company">
                TrustTransact
            </div>
            <div className="auth-form">
                <h2>Register</h2>
                <form className="register-form">
                    <label htmlFor="username">Full name</label>
                    <input value={input.name} name="username" onChange={handleChange} id="name" placeholder="full Name" />
                    <label htmlFor="email">email</label>
                    <input value={input.email} onChange={handleChange} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">password</label>
                    <input value={input.password} onChange={handleChange} type="password" placeholder="********" id="password" name="password" />
                    <label htmlFor="phone number">phone number</label>
                    <input value={input.number} onChange={handleChange} placeholder="+91" id="number" name="number" />
                    <label htmlFor="account number">account number</label>
                    <input value={input.text} onChange={handleChange} placeholder="account number" id="account" name="account" />
                    <label htmlFor="pin">pin</label>
                    <input value={input.hidden} onChange={handleChange} type="password" placeholder="****" id="pin" name="pin" />
                    <button type="submit" onClick={submit}>Submit</button>
                    
                </form>
                <Link to='/' className="custom-link">Already have an account? Login here</Link>
            </div>
        </div>
    )
}