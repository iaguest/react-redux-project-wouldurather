import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import {
  rootPath,
  newQuestionPath,
  questionPath,
  questionResultPath,
  leaderBoardPath,
  signInPath } from '../utils/strings'
import { handleInitialData } from '../actions/shared'
import { requireAuthentication } from './AuthenticatedComponent';
import Nav from './Nav'
import SignInPage from '../components/SignInPage'
import QuestionSummaryListPage from './QuestionSummaryListPage'
import QuestionPage from './QuestionPage'
import QuestionResultPage from './QuestionResultPage'
import LeaderBoardPage from './LeaderBoardPage'
import NewQuestionPage from '../components/NewQuestionPage'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            <hr />
            { this.props.loading === true
                ? null
                : <div>
                    <Route path={ rootPath } exact component={requireAuthentication(QuestionSummaryListPage)} />
                    <Route path={ signInPath } exact component={SignInPage} />
                    <Route path={ questionPath } exact component={requireAuthentication(QuestionPage)} />
                    <Route path={ questionResultPath } exact component={requireAuthentication(QuestionResultPage)} />
                    <Route path={ newQuestionPath } component={requireAuthentication(NewQuestionPage)} />
                    <Route path={ leaderBoardPath } component={requireAuthentication(LeaderBoardPage)} />
                  </div>
              } 
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
