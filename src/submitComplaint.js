import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from './Navbar';
import CenteredFormHeading from "./centeredFormHeading";


const CenteredForm = () => {
    
    
    return (
        <>
        <Navbar />
        <CenteredFormHeading/>
        <div className="App">
            <div className="auth-form-container">
            
                <form className="transfer">
                    <label for="text">Full Name</label>
                    <input type="text" placeholder="Full Name" id="Full Name" name="Full Name"/>
                    <label for="text">Phone Number</label>
                    <input type="text" placeholder="Phone number" id="Phone Number" name="Phone Number"/>
                    <label for="text">Complaints</label>
                    <input type="text" placeholder="Complaints" id="Complaints" name="Complaints"/>
                    <button className="btn-submit">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default CenteredForm;