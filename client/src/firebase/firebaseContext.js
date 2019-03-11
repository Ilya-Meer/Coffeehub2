import React, { Component } from 'react';
import { firebase } from '.';

const FirebaseContext = React.createContext();

class FirebaseProvider extends Component {
  state = {
    userID: null,
    userDisplayName: null,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ userID: user.uid, userDisplayName: user.displayName });
      } else {
        this.setState({ userID: null, userDisplayName: null });
      }
    });
  }

  render() {
    const { userID, userDisplayName } = this.state;

    return (
      <FirebaseContext.Provider value={{ userID, userDisplayName }}>
        {this.props.children}
      </FirebaseContext.Provider>
    );
  }
}

export { FirebaseContext, FirebaseProvider };
