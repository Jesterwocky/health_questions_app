const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

// const SessionStore = require('./stores/session_store.js');
// const SessionActions = require('./actions/session_actions.js');

const Login = require('./components/login/login.jsx');
const Dashboard = require('./components/dashboard/dashboard.jsx');
const HealthQuestions = require('./components/health_questions/health_questions.jsx');
const SessionStore = require('./stores/session_store.js');

const HealthApp = React.createClass({

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

function _ensureLoggedIn(nextState, replace) {
  // if (!SessionStore.loggedIn()) {
  //   replace("/login");
  // }
}

const routes = (
  <Route path="/" component={HealthApp}>
    <IndexRoute component={Dashboard} onEnter={_ensureLoggedIn}/>
    <Route path="login" component={Login}/>
    <Route path="health_questions" component={HealthQuestions}/>
  </Route>
);

function retrieveUser() {

}

document.addEventListener('DOMContentLoaded', () => {
  retrieveUser();

  ReactDOM.render((
    <Router history={hashHistory}>
      {routes}
    </Router>
  ), document.getElementById("healthapp")
);
});
