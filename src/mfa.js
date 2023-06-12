import React, { useState } from 'react';
import { Headingmfa } from './Headingmfa';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom'

export const Mfa = () => {
  const { loginWithRedirect } = useAuth0();
  
  const handleEmailCodeClick = async () => {
    try {
      await loginWithRedirect({
        connection: 'email',
        email: 'koshalg077@gmail.com', // Use the email connection
        authParams: {
          mode: 'mfa_email', // Request MFA using email
        },
        redirectUri: `https://localhost:3000/transfer`, // Specify the redirect URI
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleAuthenticatorAppClick = async () => {
    try {
      await loginWithRedirect({
        connection: 'guardian', // Use the Guardian connection
        multifactor: 'guardian', // Request MFA using Guardian
        screen_hint: 'mfa', // Show the MFA screen
        redirectUri: `https://localhost:3000/transfer`, // Specify the redirect URI
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
        <Headingmfa/>
        <div className='App'>
            <div className='auth-form-container-mfa'>
            <a href = "https://verify1-6120-mcvljt.twil.io/index.html">
              <button type="submit" className='custom-button' style={{ width: '200px' }}>
                SMS OTP
              </button>
            </a>
                <button type = "submit" onClick={handleAuthenticatorAppClick}>Authenticator App or Email</button>
            </div>
        </div>
    </>
  );
};

