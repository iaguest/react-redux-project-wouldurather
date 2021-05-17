import React from 'react'
import { connect } from 'react-redux'

class NewQuestion extends React.Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }
  updateOptionOne = value => {
    this.setState((prevState) => ({
      optionOne: value
    }));
  }
  updateOptionTwo = value => {
    this.setState((prevState) => ({
      optionTwo: value
    }))
  }
  handleSubmit = e => {
    e.preventDefault();
    // TODO: Handle submit...
    console.log(`option 1: ${this.state.optionOne}, option 2: ${this.state.optionTwo}`)
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
            value={this.state.optionOne}
            style={{width: "300px"}}
            onChange={ (e) => {this.updateOptionOne(e.target.value)} } />
          <br />
          <p>OR</p>
          <input
            type="text"
            placeholder="Enter Option Two Text Here..."
            value={this.state.optionTwo}
            style={{width: "300px"}}
            onChange={ (e) => {this.updateOptionTwo(e.target.value)} } />
          <br /><br />
          <input
            type="submit"
            value="Submit"
            disabled={!this.state.optionOne ||
                      !this.state.optionTwo ||
                      this.state.optionOne === this.state.optionTwo}/>
        </form>          
      </div>
    );
  }
}

export default connect()(NewQuestion);