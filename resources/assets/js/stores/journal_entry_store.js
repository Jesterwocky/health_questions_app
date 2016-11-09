const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher.js');
const Constants = require('../actions/constants.js');

const JournalEntryStore = new Store(Dispatcher);

let _inProgressEntry = [];
let _journalEntries = {};

function _resetJournalEntries(journalEntries) {
  _journalEntries = {};

  journalEntries.forEach((journalEntry) => {
    _journalEntries[journalEntry.id] = journalEntry;
  });
}

function _addJournalEntry(entry) {
  _journalEntries[entry.id] = entry;
}

function _setInProgressEntry(entry) {
  _inProgressEntry = entry;
}

JournalEntryStore.inProgressEntry = function() {
  return _inProgressEntry;
};

JournalEntryStore.all = function() {
  let journalEntries = [];

  if (Object.keys(_journalEntries).length > 0) {
    Object.keys(_journalEntries).forEach((key) => {
      journalEntries.push(_journalEntries[key]);
    });
  }

  return journalEntries;
};

JournalEntryStore.find = function(entryId) {
  return _journalEntries[entryId];
};

JournalEntryStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case Constants.NEW_ENTRY_INFO_RECEIVED:
      _setInProgressEntry(payload.journalEntry);
      this.__emitChange();
      break;
    case Constants.JOURNAL_ENTRIES_RECEIVED:
      _resetJournalEntries(payload.journalEntries);
      this.__emitChange();
      break;
    case Constants.JOURNAL_ENTRY_RECEIVED:
      _addJournalEntry(payload.journalEntry);
      this.__emitChange();
      break;
  }
};

module.exports = JournalEntryStore;
