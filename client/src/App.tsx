import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import React from 'react';
import awsconfig from './aws-exports';
import LoginPage from './components/pages/login';

Amplify.configure(awsconfig);

const App: React.FC = () => {
  return (
    <>
      <LoginPage />
    </>
  );
}

export default withAuthenticator(App);
