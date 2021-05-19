import React from 'react'
import { connect } from 'react-redux'
import QuestionSummaryList from './QuestionSummaryList'

class QuestionSummaryListPage extends React.Component {
  render() {
    return (
      <div>
        <QuestionSummaryList title='Unanswered Questions' ids={this.props.unansweredIds} />
        <QuestionSummaryList title='Answered Questions' ids={this.props.answeredIds} />
      </div>
    );
  }
}

function mapStateToProps({authedUser, users, questions}) {
  const answeredIds = new Set(Object.keys(users[authedUser].answers));
  const unansweredIds = Object.keys(questions).filter(id => !answeredIds.has(id));
  return {
    answeredIds: [...answeredIds],
    unansweredIds
  };
}

export default connect(mapStateToProps)(QuestionSummaryListPage);