const Store = require('flux/utils').Store;
const Dispatcher = require('./dispatcher.js');
const Constants = require('./constants.js');

const SessionStore = new Store(Dispatcher);

module.exports = SessionStore;
