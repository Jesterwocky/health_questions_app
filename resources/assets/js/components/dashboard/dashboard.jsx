const React = require('react');
const ReactDOM = require('react-dom');
const JournalEntryStore = require('../../stores/journal_entry_store.js');
const fullJournalEntryStore = require('../../stores/full_journal_entry_store.js');
const JournalEntryActions = require('../../actions/journal_entry_actions.js');
const JournalEntriesIndex = require('./journal_entries_index.jsx');
const CurrentJournalEntry = require('./current_journal_entry.jsx');

module.exports = React.createClass({
  getInitialState() {
    return ({
      journalEntries: JournalEntryStore.all(),
      displayedEntry: 0
    });
  },

  componentDidMount() {
    this.journalEntryListener = JournalEntryStore.addListener(this._handleEntriesChange);
    this.displayEntryListener = fullJournalEntryStore.addListener(this._handleDisplayChange);
    JournalEntryActions.getJournalEntries();
  },

  _handleEntriesChange() {
    let entries = JournalEntryStore.all();
    JournalEntryActions.getJournalEntry(
      entries.reverse()[this.state.displayedEntry].id
    );

    this.setState({
      journalEntries: entries.reverse()
    });
  },

  _handleDisplayChange() {
    // this is just here to force rerender after current entry is fetched
    this.setState({
      displayedEntry: this.state.displayedEntry
    });
  },

  selectEntry(entryNum) {
    journalEntryActions.getEntry(this.state.journalEntries[entryNum].id);
    this.state.displayedEntry = entryNum;
  },

  entriesIndex() {
    if (this.state.journalEntries.length > 0) {
      return(
        <JournalEntriesIndex
          journalEntries={this.state.journalEntries}
          displayedEntry={this.state.displayedEntry}
        />
      );
    }
  },

  render() {
    return(
      <div className="dashboard-page">
        <h1>My Health Journal</h1>
        {this.entriesIndex()}
        <CurrentJournalEntry/>
      </div>
    );
  }
});
