import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { Layout } from "antd";
import Header from "../components/layout/Header";
import Home from "../components/pages/Home";
import CreateCoffeeshopPage from "../components/pages/CreateCoffeeshopPage";
import ShowShopPage from "../components/pages/ShowShopPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import LoginPage from "../components/pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { FirebaseContext } from "../firebase/firebaseContext";

export const history = createHistory();

const thing = <h1>asdf</h1>;

const AppRouter = () => (
  <FirebaseContext.Consumer>
    {currentUser => {
      return (
        <Router history={history}>
          <Layout style={{ height: "100vh" }}>
            <Header history={history} />
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute
                path="/login"
                component={LoginPage}
                loggedIn={currentUser.userID}
              />
              <PrivateRoute
                path="/create"
                component={CreateCoffeeshopPage}
                loggedIn={currentUser.userID}
              />
              <Route
                path="/shops/:id"
                render={props => <ShowShopPage {...props} user={currentUser} />}
              />
              <Route component={NotFoundPage} />
            </Switch>
            <Layout.Footer style={{ textAlign: "center" }}>
              <span>
                {`Coffeehub ©2019 Created by `}
                <a
                  href="http://ilyameerovich.com"
                  target="_blank"
                  rel="noopener"
                >
                  Ilya Meerovich
                </a>
              </span>
            </Layout.Footer>
          </Layout>
        </Router>
      );
    }}
  </FirebaseContext.Consumer>
);

export default AppRouter;
