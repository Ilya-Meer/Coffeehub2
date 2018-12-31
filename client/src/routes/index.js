import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import CoffeeshopPage from '../components/CoffeeshopPage';
import NotFoundPage from '../components/NotFoundPage';
import Auth from '../Auth';
import history from '../history';

const auth = new Auth();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" render={() => <Home auth={auth} />}/>
      <Route path="/new" render={() => <CoffeeshopPage auth={auth} />}/>
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;