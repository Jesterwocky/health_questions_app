const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher.js');
const Constants = require('../actions/constants.js');

// Used only when creating a new journal entry
const ResponseStore = new Store(Dispatcher);

let _responses = {};

function _addResponse(response) {
  _responses[parseInt(response.question_id)] = response;
}

ResponseStore.all = function() {
  return Object.assign({}, _responses);
};

ResponseStore.questionResponseId = function(questionId) {
  if (Object.keys(_responses).length > 0 ){
    return _responses[questionId].answer_id;
  }

  else {
    return null;
  }
};

ResponseStore.answerSelected = function(answerId) {
  for (let qId of Object.keys(_responses)) {
    if (parseInt(_responses[qId].answer_id) === answerId) return true;
  }

  return false;
};

ResponseStore.questionResponseText = function(questionId) {
  if (Object.keys(_responses).includes(questionId)){
    return _responses[questionId].answer_text;
  }

  else {
    return "[You haven't answered this question]";
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
