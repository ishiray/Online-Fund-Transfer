import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from './Navbar';
import { Heading } from './Heading';

export const Transfer = () => {
    const location = useLocation();
    

    return (
        <>
        <Navbar />
        <Heading />
        <div className="App">
            <div className="auth-form-container">
            
                <form className="transfer">
                    <label for="text">card number</label>
                    <input type="text" placeholder="card number" id="card number" name="card number"/>
                    <label for="password">pin</label>
                    <input type="password" placeholder="pin" id="pin" name="pin"/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}