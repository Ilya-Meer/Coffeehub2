import React, { Component }from "react";
import { firebase } from '.';

const FirebaseContext = React.createContext();

class FirebaseProvider extends Component {
  state = {
    user: null,
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user : user.uid });
      } else {
        this.setState({ user : null });
      }
    })
  }

  render() {
    const {
      user
    } = this.state;

    return (
      <FirebaseContext.Provider value={user}>
        {this.props.children}
      </FirebaseContext.Provider>
    )
  }
}

export {FirebaseContext, FirebaseProvider};