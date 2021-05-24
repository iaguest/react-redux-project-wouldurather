import React from 'react'
import { NavLink } from 'react-router-dom'

import { rootPath, newQuestionPath, leaderBoardPath } from '../utils/strings'

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
        <li>
          <NavLink to={leaderBoardPath} exact activeClassName='active'>
            Leader Board
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}