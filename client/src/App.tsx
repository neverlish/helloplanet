import { withAuthenticator } from 'aws-amplify-react';
import React from 'react';
import LoginPage from './components/pages/login';

const App: React.FC = () => {
  return (
    <>
      <LoginPage />
    </>
  );
}

export default withAuthenticator(App);
