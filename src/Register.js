import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export const Register = (props) => {
    const history=useNavigate();

    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');
    // const [name, setName] = useState('');

    const [input, setInput] = useState({
        
        email: '',
        password: '',
        username: ''
        
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

    function submit(event) {
        event.preventDefault();
        const newInfo = {
            email: input.email,
            password: input.password,
            username: input.username
        }
        axios.post('http://localhost:3001/register', newInfo)
        
    }

    // async function submit(e){
    //     e.preventDefault();

    //     try{
    //         console.log(email);
    //         console.log(pass);
    //         await axios.post("http://localhost:3000/register", {
    //             email, pass
    //         })
    //         .then(res=>{
    //             if(res.data==="exist"){
    //                 alert("User already exists")
    //             }
    //             else if(res.data==="not exist"){
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
                NAME
            </div>
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form">
                    <label htmlFor="username">Full name</label>
                    <input value={input.name} name="username" onChange={handleChange} id="name" placeholder="full Name" />
                    <label htmlFor="email">email</label>
                    <input value={input.email} onChange={handleChange} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">password</label>
                    <input value={input.password} onChange={handleChange} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit" onClick={submit}>Submit</button>
                </form>
                <Link to='/register'>Already have an account? Login here</Link>
            </div>
        </div>
    )
}