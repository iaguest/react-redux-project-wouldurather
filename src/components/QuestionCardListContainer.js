import React from 'react'
import { connect } from 'react-redux'
import QuestionCardList from './QuestionCardList'

class QuestionCardListContainer extends React.Component {
  render() {
    return (
      <div>
        <QuestionCardList title='Unanswered Questions' ids={this.props.unansweredIds} />
        <QuestionCardList title='Answered Questions' ids={this.props.answeredIds} />
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

export default connect(mapStateToProps)(QuestionCardListContainer);