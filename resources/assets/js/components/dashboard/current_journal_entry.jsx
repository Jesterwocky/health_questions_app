const React = require('react');
const ReactDOM = require('react-dom');
const fullJournalEntryStore = require('../../stores/full_journal_entry_store');

module.exports = React.createClass({

  answerList() {
    if (this.props.journalEntry.responses.length > 0) {
      return this.props.journalEntry.responses.map((response) => {
        return (
          <div className="q-and-a-set">
            <p className="question">{response.question.question_text}</p>
            <p className="answer">{response.answer.answer_text}</p>
          </div>
        );
      });
    }
  },

  questionsAnswered() {
    if (this.props.journalEntry === undefined) {
      return 0;
    }

    else {
      return this.props.journalEntry.responses.length;
    }
  },

  render() {
    if (this.props.journalEntry !== null) {
      return (
        <div className="displayed-entry">
          <h2>{this.props.journalEntry.created_at}</h2>
          <h4>Answered {this.props.journalEntry.responses.length} questions.</h4>
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
