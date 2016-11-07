import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

// const SessionStore = require('./stores/session_store.js');
// const SessionActions = require('./actions/session_actions.js');

import Login from './components/login/login.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';
import HealthQuestions from './components/health_questions/health_questions.jsx';

const HealthApp = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

const _ensureLoggedIn = function(nextState, replace) {
  // if (!SessionStore.isUserLoggedIn()) {
  if (true) {
    replace("/login");
  }
};

const routes = (
  <Route path="/" component={HealthApp}>
    <IndexRoute component={Dashboard} onEnter={_ensureLoggedIn}/>
    <Route path="login" component={Login}/>
    <Route path="health_questions" component={HealthQuestions}/>
  </Route>
);

//need to get user
console.log("File loaded");
document.addEventListener('DOMContentLoaded', () => {
  console.log("Dom content loaded");
  ReactDOM.render((
    <Router history={hashHistory}>
      {routes}
    </Router>
  ), document.getElementById("healthapp")
);
});
