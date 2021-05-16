import React from 'react'
import { connect } from 'react-redux'

class Question extends React.Component {
  optionOneStr = "option1";
  optionTwoStr = "option2";
  state = {
    selectedOption: this.optionOneStr
  }
  onSelectOption = e => {
    this.setState(()=>({
      selectedOption: e.target.value
    }));
  }
  onSubmit = () => {
    console.log("Selected option: ", this.state.selectedOption)
    // TODO: Update store
  }
  render() {
    const { question, avatarURL } = this.props;
    return (
      <div style={{ display: "grid", gridTemplateColumns: "10% 90%", gridGap: 20, alignItems: 'center', border: "1px solid black", margin: "10px" }}>
        <div>
          <img src={ avatarURL } alt="" style={{width:"75%", height:"75%"}}/>
        </div>
        <div>
          <h2>{`${question.author} asks:`}</h2>
          <p>Would you rather?</p>
          <div>
            <form>
              <input type="radio" id="choiceOne" name="contact" value={this.optionOneStr} checked={this.state.selectedOption === this.optionOneStr} onChange={this.onSelectOption} />
              <label>1. { question.optionOne.text }</label>
              <br/>
              <input type="radio" id="choiceTwo" name="contact" value={this.optionTwoStr} checked={this.state.selectedOption === this.optionTwoStr} onChange={this.onSelectOption} />
              <label>2. { question.optionTwo.text }</label>
            </form>
          </div>
          <br/>
          <div>
            <button type="submit" onClick={this.onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({authedUser, users, questions}, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question: question,
    avatarURL: users[question.author].avatarURL
  };
}

export default connect(mapStateToProps)(Question);