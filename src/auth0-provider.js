// auth0-provider.js

import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = 'dev-6mmv23mrihn8cr6r.us.auth0.com';
  const clientId = 'hpftDc16VQvqAlkgnUrMsiJVz8S27iqb';

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
