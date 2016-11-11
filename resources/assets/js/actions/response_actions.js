const Dispatcher = require('../dispatcher.js');
const ResponseApiUtil = require('./util/response_api_util.js');
const Constants = require('./constants.js');

module.exports = {
  postResponse(responseData) {
    ResponseApiUtil.postResponse(
      responseData,
      this.receiveResponse
    );
  },

  receiveResponse(response) {
    Dispatcher.dispatch({
      actionType: Constants.NEW_RESPONSE,
      response: response
    });
  },

  clearResponses() {
    Dispatcher.dispatch({
      actionType: Constants.CLEAR_RESPONSES
    });
  }
};
