import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import { rootPath, newQuestionPath, questionPath, questionResultPath, leaderBoardPath } from '../utils/strings'
import { handleInitialData } from '../actions/shared'
import NewQuestionPage from '../components/NewQuestionPage'
import QuestionSummaryListPage from './QuestionSummaryListPage'
import QuestionPage from './QuestionPage'
import QuestionResultPage from './QuestionResultPage'
import LeaderBoardPage from './LeaderBoardPage'
import Nav from './Nav'

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
                    <Route path={ rootPath } exact component={QuestionSummaryListPage} />
                    <Route path={ questionPath } exact component={QuestionPage} />
                    <Route path={ questionResultPath } exact component={QuestionResultPage} />
                    <Route path={ newQuestionPath } component={NewQuestionPage} />
                    <Route path={ leaderBoardPath } component={LeaderBoardPage} />
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
