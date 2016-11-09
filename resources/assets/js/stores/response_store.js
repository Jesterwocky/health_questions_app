const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher.js');
const Constants = require('../actions/constants.js');

// Used only when creating a new journal entry
const ResponseStore = new Store(Dispatcher);

let _responses = {};

function _addResponse(response) {
  _responses[response.question_id] = response;
}

ResponseStore.all = function() {
  let responses;
  Object.assign(responses, _responses);

  return responses;
};

ResponseStore.questionResponse = function(questionId) {
  if (Object.keys(_responses).length > 0 ){
    return _responses[questionId].id;
  }

  else {
    return null;
  }
};

ResponseStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case Constants.NEW_RESPONSE:
      _addResponse(payload.response);
      this.__emitChange();
      break;
  }
};

module.exports = ResponseStore;
