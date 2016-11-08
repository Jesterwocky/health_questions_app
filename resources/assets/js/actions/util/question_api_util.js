import $ from 'jquery';

module.exports = {
  questionsAndAnswers: function(success, error) {
    $.ajax({
      url: '/questions',
      type: 'GET',
      dataType: 'json',
      success: success
    });
  }
};
