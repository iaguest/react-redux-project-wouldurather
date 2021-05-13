import React from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Question from './Question'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Question id={"6ni6ok3ym7mf1p33lnez"} />
    );
  }
}

export default connect()(App);
