import * as React from 'react';
import { withAuthenticator } from 'aws-amplify-react';

interface AppProps {
  authState?: any;
}

class App extends React.Component<AppProps> {
  constructor(props: AppProps, context: any) {
    super(props, context);
  }

  render() {
    if (this.props.authState == 'signedIn') {
      return (
        <React.Fragment>
          <h1>Hello World</h1>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}

export default withAuthenticator(App);