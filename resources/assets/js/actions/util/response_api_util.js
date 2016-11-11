import $ from 'jquery';

module.exports = {
  postResponse: function(responseData, success, error) {
    $.ajax({
      url: 'api/responses',
      type: 'POST',
      data: responseData,
      dataType: 'json',
      success: success
    });
  }
};
