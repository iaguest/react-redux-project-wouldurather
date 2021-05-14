import React from 'react'
import { connect } from 'react-redux'

class Question extends React.Component {
  render() {
    const { question, avatarURL } = this.props;
    if (!question) {
      return <p>This Question does not exist</p>;
    }
    return (
      <div style={{ display: "grid", gridTemplateColumns: "10% 90%", gridGap: 20 }}>
        <div>
          <img src={ avatarURL } alt="" style={{width:"100px", height:"100px"}}/>
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
    avatarURL: question ? users[question.author].avatarURL : null
  };
}

export default connect(mapStateToProps)(Question);