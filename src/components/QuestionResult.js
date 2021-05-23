import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { optionOneString, optionTwoString, resultsString } from '../utils/strings'
import { getSelectedOption } from '../utils/questionHelper'

function QuestionResult(props) {
  const {
    optionOne,
    optionTwo,
    numVotesOption1,
    numVotesOption2,
    totalVotes,
    selectedOption } = props;
  return (
    <div>
      <p>{ resultsString }:</p>
      <p>
        1. { optionOne }
        { _displayVotes(numVotesOption1, totalVotes, selectedOption === optionOneString) }
      </p>
      <p>
        2. { optionTwo }
        { _displayVotes(numVotesOption2, totalVotes, selectedOption === optionTwoString) }
      </p>
    </div>
  );
}

function _displayVotes(num, total, isSelectedOption) {
  return (
    <p className='votes'>
      {`${num} of ${total} votes (${((num/total)*100).toFixed(1)}%) ${(isSelectedOption) ? '*' : ''}`}
    </p>
  );
}

function mapStateToProps({authedUser, users, questions}, {id}) {
  const question = questions[id];
  const optionOne = question.optionOne;
  const optionTwo = question.optionTwo;
  const numVotesOption1 = optionOne.votes.length;
  const numVotesOption2 = optionTwo.votes.length;
  return {
    authedUser,
    optionOne: optionOne.text,
    optionTwo: optionTwo.text,
    numVotesOption1,
    numVotesOption2,
    totalVotes: numVotesOption1 + numVotesOption2,
    selectedOption: getSelectedOption(users, authedUser, id),
  };
}

export default withRouter(connect(mapStateToProps)(QuestionResult));