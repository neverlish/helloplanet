import Amplify from 'aws-amplify';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from "./stores";

Amplify.configure({
  aws_project_region: process.env.REACT_APP_aws_project_region,
  aws_cognito_identity_pool_id: process.env.REACT_APP_aws_cognito_identity_pool_id,
  aws_cognito_region: process.env.REACT_APP_aws_cognito_region,
  aws_user_pools_id: process.env.REACT_APP_aws_user_pools_id,
  aws_user_pools_web_client_id: process.env.REACT_APP_aws_user_pools_web_client_id,
  aws_appsync_graphqlEndpoint: process.env.REACT_APP_aws_appsync_graphqlEndpoint,
  aws_appsync_region: process.env.REACT_APP_aws_appsync_region,
  aws_appsync_authenticationType: process.env.REACT_APP_aws_appsync_authenticationType,
});

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
