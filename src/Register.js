import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export const Register = (props) => {
    const history=useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

   

    async function submit(e){
        e.preventDefault();

        try{
            console.log(email);
            console.log(pass);
            await axios.post("http://localhost:3001/register", {
                email, pass
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="not exist"){
                    history("/transfer")
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
                NAME
            </div>
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form" action="POST">
                    <label htmlFor="name">Full name</label>
                    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit" onClick={submit}>Submit</button>
                </form>
                <Link to='/register'>Already have an account? Login here</Link>
            </div>
        </div>
    )
}