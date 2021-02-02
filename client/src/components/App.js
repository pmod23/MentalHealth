import React from "react";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Onboarding from "./Onboarding";
import Dashboard from './Dashboard';
import Survey from './Survey';


export default class App extends React.Component {
  render() {
    return (
      <main>
        <Router>
          <Switch>
            <Route path="/signup">
              <Signup/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/onboarding">
              <Onboarding/>
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/wellness-survey">
              <Survey />
            </Route>
            <Route path="/">
              <h1>homepage</h1>
            </Route>
          </Switch>
        </Router>

      </main>
    )
  }
}
