import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AppRouter, { history } from './routes'
import { firebase } from './firebase';
import { FirebaseProvider } from './firebase/firebaseContext';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const app = (
  <FirebaseProvider>
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>  
  </FirebaseProvider>
);

const root = document.getElementById('root');

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    render(app, root);   
    hasRendered = true; 
  }
}

render(
  <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <img src="/images/loader.gif" alt="Loader"/>
  </div>, root);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    renderApp();
  } else {
    firebase.auth().signOut().then(() => {
      renderApp();
      history.push('/');
    })
  }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

