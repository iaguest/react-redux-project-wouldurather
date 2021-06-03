import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { wouldYouRatherString, buildQuestionPath } from '../utils/strings'
import { userHasAnswered } from '../utils/questionHelper'

class QuestionSummary extends React.Component {
  onSubmit = (e, qid) => {
    e.preventDefault();
    this.props.history.push(buildQuestionPath(qid));
  }
  render() {
    const { question, userHasAnswered } = this.props;
    return (
      <div>
         <p>{ wouldYouRatherString }</p>
         <div>
           <p>{ `... ${question.optionOne.text.slice(0, 20)} ...` }</p>
           <div>
            <button
              type='submit'
              onClick={ (e) => { this.onSubmit(e, question.id) } }>
              { `View ${(userHasAnswered) ? "Poll" : "Question"}` }
            </button>
          </div>
         </div>   
      </div>
    );
  }
}

function mapStateToProps({authedUser, users, questions}, {qid}) {
  return {
    authedUser,
    question: questions[qid],
    userHasAnswered: userHasAnswered(users[authedUser], qid)
  };
}

export default withRouter(connect(mapStateToProps)(QuestionSummary));
