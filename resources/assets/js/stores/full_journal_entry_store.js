const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher.js');
const Constants = require('../actions/constants.js');

const fullJournalEntryStore = new Store(Dispatcher);

let _journalEntry = [];

function _resetJournalEntry(journalEntry) {
  _journalEntry = journalEntry;
}

fullJournalEntryStore.currentEntry = function() {
  return _journalEntry;
};

fullJournalEntryStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case Constants.JOURNAL_ENTRY_RECEIVED:
      _resetJournalEntry(payload.journalEntry);
      this.__emitChange();
      break;
  }
};

module.exports = fullJournalEntryStore;
