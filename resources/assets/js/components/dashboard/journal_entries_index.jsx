const React = require('react');
const ReactDOM = require('react-dom');
const IndexItem = require('./journal_entries_index_item.jsx');

module.exports = React.createClass({

  journalEntriesList() {
    if (this.props.journalEntries.length > 0) {
      return this.props.journalEntries.map((entry, i) => {

        return (
          <IndexItem
            key={entry.id}
            entryNum={i}
            questionsAnswered={entry.questions}
            entryDate={entry.created_at}
            selected={i === this.props.displayedEntry}
          />
        );
      });
    }
  },

  render() {    
    return(
      <div className="journal-entry-list">
        <h2>Journal Entries</h2>
        <ul className="journal-entries-list">
          {this.journalEntriesList()}
        </ul>
      </div>
    );
  }
});
