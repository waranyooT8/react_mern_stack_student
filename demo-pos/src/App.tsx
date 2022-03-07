import React from "react";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteProps,
  Switch,
} from "react-router-dom";

type Props = {};

export default function App({}: Props) {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/notfound" component={PageNotFound} />
          <Redirect exact={true} path="/" to="/login" />
          <Redirect path="/" to="/notfound" />
        </Switch>
      </Router>
    </>
  );
}

const PageNotFound = () => <div>Page not found</div>;
