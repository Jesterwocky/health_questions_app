const React = require('react');
const ReactDOM = require('react-dom');
const fullJournalEntryStore = require('../../stores/full_journal_entry_store');

module.exports = React.createClass({
  getInitialState() {
    return({
      journalEntry: undefined,
    });
  },

  componentDidMount() {
    this.fullJournalEntryListener = fullJournalEntryStore.addListener(this._handleEntryChange);
  },

  _handleEntryChange() {
    this.setState({
      journalEntry: fullJournalEntryStore.currentEntry()
    });
  },

  answerList() {
    if (this.state.journalEntry.responses.length > 0) {
      return this.state.journalEntry.responses.map((response) => {
        return (
          <div>
            <p>Question: {response.question.question_text}</p>
            <p>I answered: {response.answer.answer_text}</p>
          </div>
        );
      });
    }
  },

  questionsAnswered() {
    if (this.state.journalEntry === undefined) {
      return 0;
    }

    else {
      return this.state.journalEntry.responses.length;
    }
  },

  render() {
    if (this.state.journalEntry !== undefined) {
      return (
        <div className="displayed-entry">
          <h2>{this.state.journalEntry.created_at}</h2>
          <p>Answered {this.state.journalEntry.responses.length} questions.</p>
          {this.answerList()}
        </div>
      );
    }

    else {
      return (
        <div className="displayed-entry">
        </div>
      );
    }
  }
});
