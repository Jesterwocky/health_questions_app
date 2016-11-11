const Dispatcher = require('../dispatcher.js');
const JournalEntryApiUtil = require('./util/journal_entry_api_util.js');
const Constants = require('./constants.js');

module.exports = {
  createJournalEntry() {
    JournalEntryApiUtil.newEntry(
      this.receiveNewEntryInfo
    );
  },

  getJournalEntries() {
    JournalEntryApiUtil.getEntries(
      this.receiveJournalEntries
    );
  },

  getJournalEntry(entryId) {
    JournalEntryApiUtil.getEntry(
      entryId,
      this.receiveJournalEntry
    );
  },

  receiveNewEntryInfo(entry) {
    debugger
    Dispatcher.dispatch({
      actionType: Constants.NEW_ENTRY_INFO_RECEIVED,
      journalEntry: entry
    });
  },

  receiveJournalEntries(journalEntries) {
    Dispatcher.dispatch({
      actionType: Constants.JOURNAL_ENTRIES_RECEIVED,
      journalEntries: journalEntries
    });
  },

  receiveJournalEntry(journalEntry) {
    Dispatcher.dispatch({
      actionType: Constants.JOURNAL_ENTRY_RECEIVED,
      journalEntry: journalEntry
    });
  }
};
