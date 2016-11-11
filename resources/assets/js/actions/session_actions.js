const Dispatcher = require('../dispatcher.js');
const SessionApiUtil = require('../actions/util/session_api_util.js');
const Constants = require('./constants.js');

module.exports = {

  logIn(userData) {
    SessionApiUtil.logIn(
      userData,
      this.receiveCurrentUser
    );
  },

  signUp(userData) {
    SessionApiUtil.signUp(
      userData,
      this.receiveCurrentUser
    );
  },

  logOut() {
    SessionApiUtil.logOut(
      this.removeCurrentUser
    );
  },

  receiveCurrentUser(user) {
    debugger
    Dispatcher.dispatch({
      actionType: Constants.LOGIN,
      user: user
    });
  },

  removeCurrentUser() {
    debugger
    Dispatcher.dispatch({
      actionType: Constants.LOGOUT
    });
  },
};
