import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Nav from './Nav'
import { signInPath } from '../utils/strings'
import { resetAuthedUser } from '../actions/authedUser'
import { isAuthenticated } from '../utils/authedUserHelper'

function Header(props) {
  const { authedUser, users, loading, dispatch } = props
  return (
    <div className='header'>
    <Nav />
    { !loading && isAuthenticated(authedUser) &&
      <ul className="header-end-item">
        <li>{`Hello ${users[authedUser].name}!`}</li>
        <li>
          <Link
            to={signInPath}
            onClick={ (e) => { dispatch(resetAuthedUser())} }
            >Sign Out
          </Link>
        </li>
      </ul>
    }         
  </div>
  );
}

function mapStateToProps({authedUser, users}) {
  return {
    authedUser,
    users,
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(Header);
