import React from 'react'
import { connect } from 'react-redux'

import { optionOneString, optionTwoString} from '../utils/strings'
import { handleAnswerQuestion } from '../actions/questions'

class Question extends React.Component {
  state = {
    selectedOption: this.props.selectedOption
  }
  onSelectOption = e => {
    this.setState(()=>({
      selectedOption: e.target.value
    }));
  }
  onSubmit = e => {
    e.preventDefault();
    const { authedUser, question } = this.props;
    this.props.dispatch(handleAnswerQuestion({
      authedUser,
      qid: question.id,
      answer: this.state.selectedOption
    }));
  }
  render() {
    const { question, avatarURL } = this.props;
    return (
      <div style={{border: "1px solid black", padding: "5px" }}>
        <h3>{`${question.author} asks:`}</h3>
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
            <p>Would you rather?</p>
            <div>
              <form onSubmit={this.onSubmit} >
                <input
                  type="radio"
                  id="choiceOne"
                  name="contact"
                  value={optionOneString}
                  checked={this.state.selectedOption === optionOneString}
                  onChange={this.onSelectOption} />
                <label>1. { question.optionOne.text }</label>
                <br/>
                <input
                  type="radio"
                  id="choiceTwo"
                  name="contact"
                  value={optionTwoString}
                  checked={this.state.selectedOption === optionTwoString}
                  onChange={this.onSelectOption} />
                <label>2. { question.optionTwo.text }</label>
                <br /><br />
                <div>
                  <input
                    type="submit"
                    value="Submit"
                    disabled={this.state.selectedOption === this.props.selectedOption}/>
                </div>
              </form>
            </div>
            <br/>
          </div>
        </div>
      </div>
    );
  }
}

function answerIds(users, authedUser) {
  return Object.keys(users[authedUser].answers);
}

function mapStateToProps({authedUser, users, questions}, { id }) {
  const question = questions[id];
  const selectedOption = answerIds(users, authedUser).includes(id)
    ? users[authedUser].answers[id]
    : null;
  return {
    authedUser,
    question,
    selectedOption,
    avatarURL: users[question.author].avatarURL
  };
}

export default connect(mapStateToProps)(Question);