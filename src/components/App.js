import React from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <h3>Hello World!</h3>
    );
  }
}

export default connect()(App);
