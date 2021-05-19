import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { wouldYouRatherString } from '../utils/strings'
import { getSelectedOption } from '../utils/questionHelper'

class QuestionSummary extends React.Component {
  onSubmit = (e, id, userHasAnswered) => {
    e.preventDefault();
    if (userHasAnswered) {
      // TODO: handle userHasAnswered case
      return;
    }
    this.props.history.push(`/question/${id}`);
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

function mapStateToProps({authedUser, users, questions}, {id}) {
  const selectedOption = getSelectedOption(users, authedUser, id);
  return {
    authedUser,
    question: questions[id],
    userHasAnswered: selectedOption !== null
  };
}

export default withRouter(connect(mapStateToProps)(QuestionSummary));
