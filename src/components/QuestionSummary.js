import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { wouldYouRatherString, buildQuestionPath, buildQuestionResultPath } from '../utils/strings'
import { getSelectedOption } from '../utils/questionHelper'

class QuestionSummary extends React.Component {
  onSubmit = (e, qid, userHasAnswered) => {
    e.preventDefault();
    if (userHasAnswered) {
      this.props.history.push(buildQuestionResultPath(qid));
      return;
    }
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
              onClick={ (e) => { this.onSubmit(e, question.id, userHasAnswered) } }>
              { `View ${(userHasAnswered) ? "Poll" : "Question"}` }
            </button>
          </div>
         </div>   
      </div>
    );
  }
}

function mapStateToProps({authedUser, users, questions}, {qid}) {
  const selectedOption = getSelectedOption(users, authedUser, qid);
  return {
    authedUser,
    question: questions[qid],
    userHasAnswered: selectedOption !== null
  };
}

export default withRouter(connect(mapStateToProps)(QuestionSummary));
