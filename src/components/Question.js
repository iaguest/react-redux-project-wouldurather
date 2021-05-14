import React from 'react'
import { connect } from 'react-redux'

class Question extends React.Component {
  render() {
    const { question, avatarURL } = this.props;
    return (
      <div style={{ display: "grid", gridTemplateColumns: "10% 90%", gridGap: 20, alignItems: 'center' }}>
        <div>
          <img src={ avatarURL } alt="" style={{width:"75%", height:"75%"}}/>
        </div>
        <div>
          <h3>{`${question.author} asks:`}</h3>
          <p>Would you rather?</p>
          <p>1. { question.optionOne.text }</p>
          <p>2. { question.optionTwo.text }</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({authedUser, users, questions}, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question: question,
    avatarURL: users[question.author].avatarURL
  };
}

export default connect(mapStateToProps)(Question);