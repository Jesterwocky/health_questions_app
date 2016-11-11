const React = require('react');
const ReactDOM = require('react-dom');
const IndexItem = require('./journal_entries_index_item.jsx');
const FullJournalEntryStore = require('../../stores/full_journal_entry_store');

module.exports = React.createClass({
  selectEntry(entryId) {
    this.props.selectEntry(entryId);
  },

  journalEntriesList() {
    if (this.props.journalEntries.length > 0) {
      return this.props.journalEntries.map((entry) => {
        return (
          <IndexItem
            key={entry.id}
            entryId={entry.id}
            questionsAnswered={entry.questions}
            entryDate={entry.created_at}
            selected={entry.id === parseInt(this.props.currentEntryId)}
            selectEntry={this.props.selectEntry}
          />
        );
      });
    }
  },

  render() {
    return(
      <div className="journal-entry-sidebar group">
        <ul className="journal-entries-list group">
          {this.journalEntriesList()}
        </ul>
      </div>
    );
  }
});
