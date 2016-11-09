const React = require('react');
const ReactDOM = require('react-dom');
const JounalEntryIndexItem = require('./journal_entries_index_item.jsx');

module.exports = React.createClass({

  selectEntry() {
    this.props.selectEntry(this.props.entryNum);
  },

  render() {
    let classes = "journal-entries-index";

    if (this.props.selected) {
      classes = "journal-entries-index selected-entry";
    }

    return (
      <li className={classes} onClick={this.selectEntry}>
        <h3>{this.props.entryDate}</h3>
      </li>
    );
  }
});
