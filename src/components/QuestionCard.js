import React from 'react'
import { connect } from 'react-redux'

class QuestionCard extends React.Component {
  render() {
    const { author, avatarURL, content } = this.props;
    return (
      <div style={{border: "1px solid black", padding: "5px" }}>
        <h3>{`${author} asks:`}</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "10% 90%",
            gridGap: 20,
            alignItems: 'center'}}>
          <div>
            <img src={ avatarURL } alt="" style={{width:"75%", height:"75%"}}/>
          </div>
          <div>
            { content }
          </div>
        </div>
      </div>
    );
  }
}



function mapStateToProps({users, questions}, { id, content }) {
  const author = questions[id].author;
  return {
    author,
    avatarURL: users[author].avatarURL,
    content
  };
}

export default connect(mapStateToProps)(QuestionCard);