const React = require('react');
const ReactDOM = require('react-dom');

const JournalEntryStore = require('../../stores/journal_entry_store.js');
const FullJournalEntryStore = require('../../stores/full_journal_entry_store.js');
const JournalEntryActions = require('../../actions/journal_entry_actions.js');

const JournalEntriesIndex = require('./journal_entries_index.jsx');
const CurrentJournalEntry = require('./current_journal_entry.jsx');
const NavBar = require('../nav_bar.jsx');

module.exports = React.createClass({
  getInitialState() {
    return ({
      journalEntries: JournalEntryStore.all(),
      currentEntryId: null,
      currentEntry: null
    });

  },

  componentDidMount() {
    this.journalEntryListener = JournalEntryStore.addListener(this._handleEntriesChange);
    JournalEntryActions.getJournalEntries();
  },

  _handleEntriesChange() {
    let entries = JournalEntryStore.all().reverse();
    let currentEntryId = JournalEntryStore.latestEntryId();
    let currentEntry = JournalEntryStore.find(currentEntryId);

    this.setState({
      journalEntries: entries,
      currentEntryId: currentEntryId,
      currentEntry: currentEntry
    });
  },

  selectEntry(entryId) {
    let currentEntry = JournalEntryStore.find(entryId);
    this.setState({
      currentEntryId: entryId,
      currentEntry: currentEntry
    });
  },

  entriesIndex() {
    if (this.state.journalEntries.length > 0) {
      return(
        <JournalEntriesIndex
          journalEntries={this.state.journalEntries}
          currentEntryId={this.state.currentEntryId}
          selectEntry={this.selectEntry}
        />
      );
    }
  },

  render() {
    return(
      <div className="dashboard-page">
        <NavBar/>
        <h1>Health Journal</h1>
        <div className="journal-section">
          {this.entriesIndex()}
          <CurrentJournalEntry
            journalEntry={this.state.currentEntry}
          />
        </div>
      </div>
    );
  }
});
