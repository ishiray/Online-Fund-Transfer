import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './login.css'

export const Login = (props) => {

    const history=useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(email);
    // }

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:3001/", {
                email, pass
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/transfer")
                }
                else if(res.data==="not exist"){
                    alert("User is not registered")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
        catch(e) {
            console.log(e)
        }
    }

    return (
        <div className="App">
            <div className="company">
                TrustTransact
            </div>
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" action="POST">
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit" onClick={submit}>Log In</button>
                </form>
                <Link to='/register' className = 'custom-link'>Don't have an account? Register now</Link>
            </div>
        </div>
    )
}
