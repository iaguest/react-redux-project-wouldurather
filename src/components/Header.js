import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Nav from './Nav'
import { signInPath } from '../utils/strings'
import { resetAuthedUser } from '../actions/authedUser'
import { isAuthenticated } from '../utils/authedUserHelper'

function Header(props) {
  return (
    <div className='header'>
    <Nav />
    { !props.loading && isAuthenticated(props.authedUser) &&
      <ul className="header-end-item">
        <li>{`Hello ${props.authedUser}!`}</li>
        <li>
          <Link
            to={signInPath}
            onClick={ (e) => { props.dispatch(resetAuthedUser())} }
            >Sign Out
          </Link>
        </li>
      </ul>
    }         
  </div>
  );
}

function mapStateToProps({authedUser}) {
  return {
    authedUser,
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(Header);
