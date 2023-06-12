import React, {useState} from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from './Navbar';
import { Heading } from './Heading';
import TransferForm from "./TransferForm";

export const Transfer = (props) => {
    const history=useNavigate();
    const [account, setAccount] = useState('');
    const [pin, setPin] = useState('');
    const [receiver, setReceiver] = useState('');

    function submit(e){
        e.preventDefault();

        try{
            console.log("try")
            axios.post("http://localhost:3001/transfer", {
                account, pin, receiver
            })
            .then(res=>{

                if(res.data==="exist"){
                    console.log("check")
                    history('/balance')
                }
                else if(res.data==="not exist"){
                    alert("Account is not registered")
                    console.log("4")
                }
                else if(res.data==="not receiver"){
                    alert("Receiver account doesnt exist")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log("5")
            })
        }
        catch(e){
            console.log(e)
        }
    }
    return (
        <>
        
        <Navbar />
        <Heading />
        <div className="App">
            <div className="auth-form-container">
            
                <form className="transfer" >
                <h2>Sender</h2>
                    <div className="t2">
                        <div className="t1">
                            <label for="text">Account number</label>
                            <input type="text" onChange={(e) => setAccount(e.target.value)}placeholder="account number" id="account number" name="account number"/>
                        </div>
                        <div className="t1">
                            <label for="password">Pin</label>
                            <input type="password" onChange={(e) => setPin(e.target.value)}placeholder="pin" id="pin" name="pin"/>
                        </div>
                    </div>
                    <label for="text">Transfer Amount</label>
                    <input type="text" placeholder="Enter Amount" id="amount" name="amount"/>

                    <h2>Receiver</h2>
                    <label for="text">Account number</label>
                    <input type="text" onChange={(e) => setReceiver(e.target.value)} placeholder="account number" id="account number" name="account number"/>
                    <button type="submit" onClick={submit}>Submit</button>
                </form>
            </div>
        </div>
      
        </>
    )
}