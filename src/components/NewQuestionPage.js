import React from 'react'
import { connect } from 'react-redux'

import { handleAddQuestion } from '../actions/questions'

class NewQuestionPage extends React.Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }
  updateOptionOneText = value => {
    this.setState((prevState) => ({
      optionOneText: value
    }));
  }
  updateOptionTwoText = value => {
    this.setState((prevState) => ({
      optionTwoText: value
    }))
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(handleAddQuestion(
      this.props.authedUser,
      this.state.optionOneText,
      this.state.optionTwoText));
  }
  render() {
    return (
      <div>
        <h3>Create New Question</h3>
        <p>Complete the question:</p>
        <h4>Would you rather ...</h4>
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            placeholder="Enter Option One Text Here..."
            value={this.state.optionOneText}
            style={{width: "300px"}}
            onChange={ (e) => {this.updateOptionOneText(e.target.value)} } />
          <br />
          <p>OR</p>
          <input
            type="text"
            placeholder="Enter Option Two Text Here..."
            value={this.state.optionTwoText}
            style={{width: "300px"}}
            onChange={ (e) => {this.updateOptionTwoText(e.target.value)} } />
          <br /><br />
          <input
            type="submit"
            value="Submit"
            disabled={!this.state.optionOneText ||
                      !this.state.optionTwoText ||
                      this.state.optionOneText === this.state.optionTwoText}/>
        </form>          
      </div>
    );
  }
}

function mapStateToProps({authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestionPage);