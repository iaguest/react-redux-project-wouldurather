import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { handleAddQuestion } from '../actions/questions'

class NewQuestionPage extends React.Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
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
      this.state.optionTwoText)
    );
    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: true,
    }));
  }
  render() {
    const { optionOneText, optionTwoText, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h3>Create New Question</h3>
        <p>Complete the question:</p>
        <h4>Would you rather ...</h4>
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            placeholder="Enter Option One Text Here..."
            value={optionOneText}
            style={{width: "300px"}}
            onChange={ (e) => {this.updateOptionOneText(e.target.value)} } />
          <br />
          <p>OR</p>
          <input
            type="text"
            placeholder="Enter Option Two Text Here..."
            value={optionTwoText}
            style={{width: "300px"}}
            onChange={ (e) => {this.updateOptionTwoText(e.target.value)} } />
          <br /><br />
          <input
            type="submit"
            value="Submit"
            disabled={!optionOneText ||
                      !optionTwoText ||
                      optionOneText === optionTwoText}/>
        </form>          
      </div>
    );
  }
}

function mapStateToProps({authedUser}) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(NewQuestionPage);