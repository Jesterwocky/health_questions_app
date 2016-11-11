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
    SessionApiUtil.createUser(
      userData,
      this.receiveCurrentUser
    );
  },

  logOut() {

  },

  receiveCurrentUser(user) {
    Dispatcher.dispatch({
      actionType: Constants.LOGIN,
      user: user
    });
  },

  removeCurrentUser() {
    Dispatcher.dispatch({
      actionType: Constants.LOGOUT
    });
  },
};
