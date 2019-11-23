import * as React from "react";
import "./App.css";
import MainPage from "./components/pages/main";
import { Authenticator } from "aws-amplify-react";
import { SignIn } from "aws-amplify-react";
import CustomSignIn from "./components/pages/amplifyComponent/CustomSignIn";
import LoginPage from "./components/pages/login";

const awsTheme = {
  navBar: { display: "none" },
  toast: {
    backgroundColor: "red",
    position: "absolute",
    top: "10px",
    width: "50px"
  }
};

class AppWithAuth extends React.Component {
  constructor(props: any, context: any) {
    super(props, context);
  }

  render() {
    return (
      <React.Fragment>
        <Authenticator hide={[SignIn]}>
          <CustomSignIn />
          <div>page</div>
        </Authenticator>
      </React.Fragment>
    );
  }
}

export default AppWithAuth;
