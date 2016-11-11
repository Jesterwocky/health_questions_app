import $ from 'jquery';

module.exports = {
  newEntry: function(success, error) {
    $.ajax({
      url: '/api/journal_entries',
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
