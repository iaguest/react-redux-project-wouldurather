import React from 'react'
import { connect } from 'react-redux'
import LeaderBoardItem from './LeaderBoardItem'

import { score } from '../utils/userHelper'

function LeaderBoardItemList(props) {
  return (
    <ul>
      { props.uidScorePairs.map(pair => {
          const id = pair[0];
          const score = pair[1];
          return (
            <li key={id}>
              <LeaderBoardItem id={id} score={score}/>
            </li>
          );
        })
      }
    </ul>
  );
}

function mapStateToProps({users}) {
  const uidScorePairs = Object.values(users).map(user => [user.id, score(user)]).sort((a, b)=>b[1]-a[1]);
  return {
    uidScorePairs
  };
}

export default connect(mapStateToProps)(LeaderBoardItemList);