import * as React from 'react';
import { SignIn } from "aws-amplify-react";
import './CustomSignIn.css';

class CustomSignIn extends SignIn {
  constructor(props: any) {
    super(props);
    this._validAuthStates = ["signIn", "signedOut", "signedUp"];
    console.log("custo:", props);
  }

  componentDidUpdate() {
    console.log('cdu', this.props);
  }

  showComponent(theme: any) {
    return (
      <div className="customSignIn">
      <form onSubmit={this.signIn}>
        <label htmlFor="username">Username</label>
        <input 
          onChange={this.handleInputChange} 
          type="text"
          id="username"
          key="username"
          name="username"
          placeholder="Username"
        />
        <p></p>
        <label htmlFor="password">Password</label>
        <input 
          onChange={this.handleInputChange} 
          type="text"
          id="password"
          key="password"
          name="password"
          placeholder="**********"
        />
        <p></p>
        <button type="submit">Sign In Check</button>
      </form>
      </div>
    )
  }
}

export default CustomSignIn;