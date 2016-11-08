const React = require('react');
const ReactDOM = require('react-dom');
const JournalEntriesIndex = require('./journal_entries_index/journal_entries_index.jsx');
const CurrentJournalEntry = require('./current_journal_entry.jsx');

module.exports = React.createClass({

  render() {
    return(
      <div className="dashboard-page">
        My Health Journal
        // <JournalEntriesIndex/>
        // <CurrentJournalEntry/>
      </div>
    );
  }
});
