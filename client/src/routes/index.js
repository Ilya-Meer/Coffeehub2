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

export const history = createHistory();

const AppRouter = () => {
  const loggedIn = !!localStorage.getItem('user');

  return (
    <Router history={history}>
      <React.Fragment>
        <Header history={history} />
        <Switch>
          <PublicRoute
            path="/login"
            component={LoginPage}
            loggedIn={loggedIn}
          />
          <PrivateRoute
            path="/create"
            component={CoffeeshopPage}
            loggedIn={loggedIn}
          />
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            component={NotFoundPage}
          />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default AppRouter;