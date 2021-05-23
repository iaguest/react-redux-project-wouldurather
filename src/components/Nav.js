import React from 'react'
import { NavLink } from 'react-router-dom'

import { rootPath, newQuestionPath } from '../utils/strings'

export default function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to={rootPath} exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={newQuestionPath} exact activeClassName='active'>
            New Question
          </NavLink>
        </li>
      </ul>
    </nav>

  );
}