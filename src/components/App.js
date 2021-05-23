import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import { questionIdPath } from '../utils/strings'
import { handleInitialData } from '../actions/shared'
import NewQuestionPage from '../components/NewQuestionPage'
import QuestionSummaryListPage from './QuestionSummaryListPage'
import QuestionPage from './QuestionPage'
import ResultPage from './ResultPage'
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
                    <Route path='/' exact component={QuestionSummaryListPage} />
                    <Route path={ `${questionIdPath}` } exact component={QuestionPage} />
                    <Route path={ `${questionIdPath}/result` } exact component={ResultPage} />
                    <Route path='/new' component={NewQuestionPage} />
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
