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

function mapStateToProps({authedUser, users, questions}, {qid}) {
  const question = questions[qid];
  const numVotesOption1 = question.optionOne.votes.length;
  const numVotesOption2 = question.optionTwo.votes.length;
  return {
    authedUser,
    optionOne: question.optionOne.text,
    optionTwo: question.optionTwo.text,
    numVotesOption1,
    numVotesOption2,
    totalVotes: numVotesOption1 + numVotesOption2,
    selectedOption: getSelectedOption(users, authedUser, qid),
  };
}

export default withRouter(connect(mapStateToProps)(QuestionResult));