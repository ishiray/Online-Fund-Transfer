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
                <button type = "submit" onClick={handleButtonClick}>MFA 1</button>
                <button type = "submit" onClick={handleButtonClick}>MFA 1</button>
                <button type = "submit" onClick={handleButtonClick}>MFA 1</button>
                <button type = "submit" onClick={handleButtonClick}>MFA 1</button>
            </div>
        </div>
    </>
  );
};

