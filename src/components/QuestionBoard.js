import React from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionBoard extends React.Component {
  render() {
    return (
      <div>
        <h3>Unanswered Questions</h3>
        <ul>
          { this.props.unansweredIds.map(unansweredId => (
              <li key={unansweredId}>
                <Question id={unansweredId} />
              </li>))}
        </ul>
        <h3>Answered Questions</h3>
        <ul>
          { this.props.answeredIds.map(answeredId => (
            <li key={answeredId}>
              <Question id={answeredId} />
            </li>))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({authedUser, users, questions}) {
  const answeredIds = new Set(Object.keys(users[authedUser].answers));
  const questionIds = new Set(Object.keys(questions));
  const unansweredIds = [...questionIds].filter(id => !answeredIds.has(id));
  return {
    answeredIds: [...answeredIds],
    unansweredIds
  };
}

export default connect(mapStateToProps)(QuestionBoard);