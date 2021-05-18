import React from 'react'
import { connect } from 'react-redux'

import { optionOneString, optionTwoString} from '../utils/strings'
import { handleAnswerQuestion } from '../actions/questions'

class QuestionOptions extends React.Component {
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
    const { question } = this.props;
    return (
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
    selectedOption
  }
}

export default connect(mapStateToProps)(QuestionOptions);
