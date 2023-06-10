import React from 'react';
import { Headingmfa } from './Headingmfa';
import {useNavigate} from "react-router-dom";


export const Mfa = () => {
    const history = useNavigate();

  const handleButtonClick = () => {
    history('/transfer');
  };
  return (
    <>
        <Headingmfa/>
        <div className='App'>
            <div className='auth-form-container-mfa'>
                <button type = "submit" onClick={handleButtonClick}>Email Code</button>
                <button type = "submit" onClick={handleButtonClick}>SMS OTP</button>
                <button type = "submit" onClick={handleButtonClick}>Physical Key</button>
                <button type = "submit" onClick={handleButtonClick}>Authenticator App</button>
            </div>
        </div>
    </>
  );
};

