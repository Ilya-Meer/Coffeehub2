import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ loggedIn, component: Component, ...rest }) =>  (
  <Route {...rest} component={props => {
    return loggedIn ? (
      <Component {...props} />
    ) : <Redirect to="/login"/>
  }} />
)

export default PrivateRoute;
 