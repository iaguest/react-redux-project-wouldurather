import React from 'react'
import { connect } from 'react-redux'
import { isAuthenticated } from '../utils/authedUserHelper'
import { signInPath } from '../utils/strings'

export function requireAuthentication(Component) {
  class AuthenticatedComponent extends React.Component {

    componentWillMount () {
        this.checkAuth(this.props.isAuthenticated);
    }

    componentWillReceiveProps (nextProps) {
        this.checkAuth(nextProps.isAuthenticated);
    }

    checkAuth (isAuthenticated) {
        if (!isAuthenticated) {
            const redirectAfterLogin = this.props.location.pathname;
            this.props.history.push(signInPath, { nextPathName: redirectAfterLogin });
        }
    }

    render () {
        return (
            <div>
                {this.props.isAuthenticated === true
                    ? <Component {...this.props}/>
                    : null
                }
            </div>
        )
    }

  }

  const mapStateToProps = ({authedUser}) => ({
    isAuthenticated: isAuthenticated(authedUser)
  });

  return connect(mapStateToProps)(AuthenticatedComponent);

}