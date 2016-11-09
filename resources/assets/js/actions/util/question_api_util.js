import $ from 'jquery';

module.exports = {
  questionsAndAnswers: function(success, error) {
    $.ajax({
      url: '/api/questions',
      type: 'GET',
      dataType: 'json',
      success: success
    });
  }
};
