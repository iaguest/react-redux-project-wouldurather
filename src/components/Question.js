import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {
  optionOneString,
  optionTwoString,
  wouldYouRatherString,
  buildQuestionResultPath
} from '../utils/strings'

import { handleAnswerQuestion } from '../actions/questions'
import { getSelectedOption } from '../utils/questionHelper'

class Question extends React.Component {
  state = {
    selectedOption: this.props.selectedOption,
    toResult: false,
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
    this.setState(() => ({
      toResult: true
    }));
  }
  render() {
    const { question } = this.props;

    if (this.state.toResult === true) {
      this.props.history.push(buildQuestionResultPath(question.id));
    }

    return (
      <div>
        <p>{ wouldYouRatherString }</p>
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
      </div>
    );
  }
}

function mapStateToProps({authedUser, users, questions}, { qid }) {
  return {
    authedUser,
    question: questions[qid],
    selectedOption: getSelectedOption(users, authedUser, qid)
  };
}

export default withRouter(connect(mapStateToProps)(Question));
