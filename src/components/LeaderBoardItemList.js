import React from 'react'
import { connect } from 'react-redux'
import LeaderBoardItem from './LeaderBoardItem'

import { score } from '../utils/userHelper'

function LeaderBoardItemList(props) {
  return (
    <ul>
      { props.orderedUids.map(id => {
          return (
            <li key={id}>
              <LeaderBoardItem id={id}/>
            </li>
          );
        })
      }
    </ul>
  );
}

function mapStateToProps({users}) {
  return {
    orderedUids: Object.values(users).sort(
      (a, b)=>score(b) - score(a)).map(user=>user.id)
  };
}

export default connect(mapStateToProps)(LeaderBoardItemList);