const React = require('react');
const ReactDOM = require('react-dom');
const JounalEntryIndexItem = require('./journal_entries_index_item.jsx');

module.exports = React.createClass({

  selectEntry() {
    this.props.selectEntry(this.props.entryId);
    console.log("Click in index item");
  },

  render() {
    let classes = "journal-entry-item";

    if (this.props.selected) {
      classes = "journal-entry-item selected-entry";
    }

    return (
      <li className={classes} onClick={this.selectEntry}>
        <h3>{this.props.entryDate}</h3>
      </li>
    );
  }
});
