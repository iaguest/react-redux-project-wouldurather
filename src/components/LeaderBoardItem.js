import React from 'react'
import { connect } from 'react-redux'

import { answerIds, score } from '../utils/userHelper'

class LeaderBoardItem extends React.Component {
  render() {
    const { name, avatarURL, numAnswered, numQuestions, score } = this.props;
    return (
      <div className="card">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "20% 60% 20%",
            gridGap: 20,
            alignItems: 'center'}} >
          <div>
            <img src={ avatarURL } alt="" style={{width:"50%", height:"50%"}}/>
          </div>
          <div>
            <h3>{ name }</h3>
            <p>{`Answered questions ${ numAnswered }`}</p>
            <p>{`Created questions ${ numQuestions }` }</p>
          </div>
          <div>
            <h3>Score</h3>
            <p>{ score }</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({users}, {id}) {
  const user = users[id];
  const numQuestions = user.questions.length;
  const numAnswered = answerIds(user).length;
  return {
    name: user.name,
    avatarURL: user.avatarURL,
    numAnswered,
    numQuestions,
    score: score(user)
  };
}

export default connect(mapStateToProps)(LeaderBoardItem);
