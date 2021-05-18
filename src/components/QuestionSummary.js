import React from 'react'
import { connect } from 'react-redux'

import { wouldYouRatherString } from '../utils/strings'
import { getSelectedOption } from '../utils/questionHelper'

class QuestionSummary extends React.Component {
  onSubmit = e => {

  }
  render() {
    const { optionOne, userHasAnswered } = this.props;
    return (
      <div>
         <p>{ wouldYouRatherString }</p>
         <div>
           <p>{ `... ${optionOne.text.slice(0, 20)} ...` }</p>
           <div>
            <button
              type='submit'
              onClick={ this.onSubmit }>
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
    optionOne: questions[id].optionOne,
    userHasAnswered: selectedOption !== null
  };
}

export default connect(mapStateToProps)(QuestionSummary);