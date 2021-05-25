import React from 'react'
import { connect } from 'react-redux'

class QuestionHolder extends React.Component {
  render() {
    const { name, avatarURL, content } = this.props;
    return (
      <div className="card">
        <h3>{`${name} asks:`}</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "10% 90%",
            gridGap: 20,
            alignItems: 'center'}} >
          <div>
            <img src={ avatarURL } alt="" style={{width:"75%", height:"75%"}}/>
          </div>
          <div>
            { content }
          </div>
        </div>
        <br />
      </div>
    );
  }
}

function mapStateToProps({users, questions}, { qid, content }) {
  const uid = questions[qid].author;
  const user = users[uid];
  return {
    name: user.name,
    avatarURL: user.avatarURL,
    content
  };
}

export default connect(mapStateToProps)(QuestionHolder);
