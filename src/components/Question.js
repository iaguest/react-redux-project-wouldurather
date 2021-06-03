import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {
  optionOneString,
  optionTwoString,
  wouldYouRatherString
} from '../utils/strings'

class Question extends React.Component {
  state = {
    selectedOption: null,
  }
  onSelectOption = e => {
    this.setState(()=>({
      selectedOption: e.target.value
    }));
  }
  onSubmit = e => {
    e.preventDefault();
    this.props.onUserAnswer(this.state.selectedOption);
  }
  render() {
    const { question } = this.props;

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
                disabled={ !this.state.selectedOption }/>
            </div>
          </form>
        </div>       
      </div>
    );
  }
}

function mapStateToProps({authedUser, questions}, { qid, onUserAnswer }) {
  return {
    authedUser,
    question: questions[qid],
    onUserAnswer
  };
}

export default withRouter(connect(mapStateToProps)(Question));
