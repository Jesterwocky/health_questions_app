import $ from 'jquery';

module.exports = {
  postResponse: function(responseData, success, error) {
    $.ajax({
      url: 'api/responses',
      type: 'POST',
      dataType: 'json',
      success: success
    });
  }
};
