import React, { Component } from 'react';
import { firebase, googleAuthProvider } from '../../../firebase';

class LoginPage extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>This is the login page!</h1>
        <button
          onClick={() => firebase.auth().signInWithRedirect(googleAuthProvider)}
        >
          Login
        </button>
      </React.Fragment>
    );
  }
}

export default LoginPage;
