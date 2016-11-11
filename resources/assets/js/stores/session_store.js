const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher.js');
const Constants = require('../actions/constants.js');

const SessionStore = new Store(Dispatcher);

let _currentUser = {};

function _setCurrentUser(user) {
  _currentUser = user;
}

function _removeCurrentUser () {
  _currentUser = [];
}

SessionStore.loggedIn = function() {
  return _currentUser.id === undefined;
};

SessionStore.currentUser = function() {
  return Object.assign({}, _currentUser);
};

SessionStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case Constants.LOGIN:
      _setCurrentUser(payload.user);
      this.__emitChange();
      break;
    case Constants.LOGOUT:
      _removeCurrentUser();
      this.__emitChange();
      break;
  }
};

module.exports = SessionStore;
