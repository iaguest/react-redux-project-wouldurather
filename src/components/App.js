import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import NewQuestion from '../components/NewQuestion'
//import QuestionListContainer from './QuestionListContainer'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Fragment>
        <LoadingBar />
        <div className='container'>
          { this.props.loading === true
              ? null
              : <div>
                  <NewQuestion />
                </div>
            } 
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
