import React from 'react'
import { connect } from 'react-redux'

import QuestionHolder from './QuestionHolder'
import Question from './Question'
import QuestionResult from './QuestionResult'

import { handleAnswerQuestion } from '../actions/questions'
import { userHasAnswered } from '../utils/questionHelper'
import NotFoundPage from './NotFoundPage'

class QuestionPage extends React.Component {
  onUserAnswer = (answer) => {
    const { authedUser, qid } = this.props;
    this.props.dispatch(handleAnswerQuestion({
      authedUser,
      qid,
      answer
    }));
  }
  render() {
      const { qid, isValidQid, userHasAnswered } = this.props;
      if (!isValidQid) {
        return <NotFoundPage />;
      }
      const content = (userHasAnswered)
        ? <QuestionResult qid={qid} />
        : <Question qid={qid} onUserAnswer={this.onUserAnswer}/>;
      return <QuestionHolder qid={qid} content={ content} />;
    }
}

function mapStateToProps({authedUser, questions, users}, { match }) {
  const { qid } = match.params;
  return {
    authedUser,
    qid,
    isValidQid: Object.keys(questions).includes(qid),
    userHasAnswered: userHasAnswered(users[authedUser], qid)
  };
}

export default connect(mapStateToProps)(QuestionPage);