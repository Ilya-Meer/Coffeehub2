import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;