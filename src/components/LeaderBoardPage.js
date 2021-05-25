import React from 'react'
import { connect } from 'react-redux'
import LeaderBoardItem from './LeaderBoardItem'

import { score } from '../utils/userHelper'

function LeaderBoardPage(props) {
  return (
    <ul>
      { props.orderedUidScorePairs.map(pair => {
        const uid = pair[0];
          return (
            <li key={uid}>
              <LeaderBoardItem uid={uid} score={pair[1]}/>
            </li>
          );
        })
      }
    </ul>
  );
}

function mapStateToProps({users}) {
  const orderedUidScorePairs = Object.values(users)
    .map(user => [user.id, score(user)])
      .sort((a, b)=>b[1]-a[1]);
  return { orderedUidScorePairs };
}

export default connect(mapStateToProps)(LeaderBoardPage);