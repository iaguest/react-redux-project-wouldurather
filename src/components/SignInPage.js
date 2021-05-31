import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import { setAuthedUser } from '../actions/authedUser'
import { isAuthenticated } from '../utils/authedUserHelper'

import { rootPath } from '../utils/strings'

class SignInPage extends React.Component {
  state = {
    selectedUser: this.props.defaultUid
  }
  onSelectUser = (item) => {
    this.setState((prevState)=>({
      selectedUser: item
    }));
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(setAuthedUser(this.state.selectedUser));
  }
  nextPath = () => {
    return (this.props.location.state)
      ? this.props.location.state.nextPathName ?? rootPath
      : rootPath;
  }
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to={ this.nextPath() } />;
    }
    return (
      <div>
        <h3>Welcome to the Would You Rather App!</h3>
        <h4>Please sign in to continue</h4>
        <select
          value={ this.state.selectedUser }
          onChange={(e) => this.onSelectUser(e.target.value)}
          >
          { this.props.uids.map((uid) => {
              return <option key={uid} value={uid}>{uid}</option>; })
          }
        </select>
        <p/>
        <button onClick={ (e) => { this.onSubmit(e) } }>Sign In</button>
      </div>
    );
  }
}

const mapStateToProps = ({authedUser, users}) => {
  const uids = Object.values(users).map((user) => user.id);
  return ({
      uids,
      defaultUid: uids[0],
      isAuthenticated: isAuthenticated(authedUser)
    }
  )
};

export default withRouter(connect(mapStateToProps)(SignInPage));
