import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import Home from '../components/Home';
import CoffeeshopPage from '../components/CoffeeshopPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { FirebaseContext } from '../firebase/firebaseContext';

export const history = createHistory();

const AppRouter = () => (
  <FirebaseContext.Consumer>
    {currentUser => {
      return (
        <Router history={history}>
          <React.Fragment>
            <Header history={history} />
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute
                path="/login"
                component={LoginPage}
                loggedIn={currentUser}
              />
              <PrivateRoute
                path="/create"
                component={CoffeeshopPage}
                loggedIn={currentUser}
              />
              <Route component={NotFoundPage} />
            </Switch>
          </React.Fragment>
        </Router>
      );
    }}
  </FirebaseContext.Consumer>
);

export default AppRouter;
