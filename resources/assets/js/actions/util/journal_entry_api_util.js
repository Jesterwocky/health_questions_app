import $ from 'jquery';

// var getXsrfToken = function() {
//     var cookies = document.cookie.split(';');
//     var token = '';
//
//     for (var i = 0; i < cookies.length; i++) {
//         var cookie = cookies[i].split('=');
//         if(cookie[0] == 'XSRF-TOKEN') {
//             token = decodeURIComponent(cookie[1]);
//         }
//     }
//
//     return token;
// };

// $.ajaxSetup({
//     headers: {
//         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//     }
// });

module.exports = {
  newEntry: function(success, error) {
    $.ajax({
      url: '/api/journal_entries',
      // headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
      // headers: {'X-CSRF-Token': $('input[name="_token"]').val()},
      // headers: {'X-XSRF-TOKEN': getXsrfToken()},
      // headers: {'X-XSRF-TOKEN': _token},
      data: { csrf_token: $('[name="csrf_token"]').attr('content') },
      type: 'POST',
      dataType: 'json',
      success: success
    });
  },

  getEntries: function(success, error) {
    $.ajax({
      url: '/api/journal_entries',
      type: 'GET',
      dataType: 'json',
      success: success
    });
  },

  getEntry: function(entryId, success, error) {
    $.ajax({
      url: `/api/journal_entries/${entryId}`,
      type: 'GET',
      dataType: 'json',
      success: success
    });
  }
};
