import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Nav from '../components/layout/Header';
import Home from '../components/pages/Home';
import CoffeeshopPage from '../components/pages/CoffeeshopPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import LoginPage from '../components/pages/LoginPage';
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
            <Nav history={history} />
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
