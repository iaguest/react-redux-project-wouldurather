import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import {
  rootPath,
  newQuestionPath,
  questionPath,
  leaderBoardPath,
  signInPath } from '../utils/strings'
import { handleInitialData } from '../actions/shared'
import { requireAuthentication } from './AuthenticatedComponent';
import Header from './Header'
import SignInPage from './SignInPage'
import QuestionSummaryListPage from './QuestionSummaryListPage'
import QuestionPage from './QuestionPage'
import LeaderBoardPage from './LeaderBoardPage'
import NewQuestionPage from './NewQuestionPage'
import NotFoundPage from './NotFoundPage'

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
            <Header />
            <hr />
            { this.props.loading
                ? null 
                : <Switch>
                    <Route path={ rootPath } exact component={requireAuthentication(QuestionSummaryListPage)} />
                    <Route path={ signInPath } exact component={SignInPage} />
                    <Route path={ questionPath } exact component={requireAuthentication(QuestionPage)} />
                    <Route path={ newQuestionPath } component={requireAuthentication(NewQuestionPage)} />
                    <Route path={ leaderBoardPath } component={requireAuthentication(LeaderBoardPage)} />
                    <Route component={NotFoundPage} />
                  </Switch>                
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
