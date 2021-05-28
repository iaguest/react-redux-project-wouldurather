import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import { setAuthedUser } from '../actions/authedUser'
import { isAuthenticated } from '../utils/authedUserHelper'

class SignInPage extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(setAuthedUser('tylermcginnis'));
  }
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to={ this.props.location.state.nextPathName } />;
    }
    return (
      <div>
        <button onClick={ this.onSubmit }>SIGN IN</button>
      </div>
    );
  }
}

const mapStateToProps = ({authedUser}) => ({
  isAuthenticated: isAuthenticated(authedUser)
});

export default withRouter(connect(mapStateToProps)(SignInPage));
