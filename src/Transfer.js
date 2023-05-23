import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from './Navbar';
import { Heading } from './Heading';
import TransferForm from "./TransferForm";

export const Transfer = () => {
    // const [isSubmitted, setIsSubmitted] = useState(false);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setIsSubmitted(true);
    // };
    return (
        <>
        
        <Navbar />
        <Heading />
        <div className="App">
            <div className="auth-form-container">
            
                <form className="transfer" >
                    <label for="text">card number</label>
                    <input type="text" placeholder="card number" id="card number" name="card number"/>
                    <label for="password">pin</label>
                    <input type="password" placeholder="pin" id="pin" name="pin"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
      
        </>
    )
}