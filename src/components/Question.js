import React from 'react'
import { connect } from 'react-redux'

class Question extends React.Component {
  render() {
    const { question } = this.props;
    if (question === null) {
      return <p>This Question does not exist</p>;
    }
    return (
      <div>
        <h3>{`${question.author} asks:`}</h3>
        <p>Would you rather?</p>
        <p>1. { question.optionOne.text }</p>
        <p>2. { question.optionTwo.text }</p>
      </div>
    );
  }
}

function mapStateToProps({authedUser, users, questions}, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question: question
      ? question
      : null
  };
}

export default connect(mapStateToProps)(Question);