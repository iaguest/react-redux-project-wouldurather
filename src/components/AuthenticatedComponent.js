import React from 'react'
import { connect } from 'react-redux'

import { isAuthenticated } from '../utils/authedUserHelper'
import { signInPath } from '../utils/strings'

export function requireAuthentication(Component) {

  class AuthenticatedComponent extends React.Component {
    componentDidMount() {
      this.checkAuth(this.props.isAuthenticated);
    }
    checkAuth(isAuthenticated) {
      if (!isAuthenticated) {
          this.props.history.push(
            signInPath, { nextPathName: this.props.location.pathname });
      }
    }
    render() {
      return (
          <div>
              {this.props.isAuthenticated === true
                  ? <Component {...this.props}/>
                  : null
              }
          </div>
      );
    }
  }

  const mapStateToProps = ({authedUser}) => ({
    isAuthenticated: isAuthenticated(authedUser)
  });

  return connect(mapStateToProps)(AuthenticatedComponent);

}