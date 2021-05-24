import React from 'react'
import { connect } from 'react-redux'

class LeaderBoardItem extends React.Component {
  render() {
    return (
      <div>TODO</div>
    );
  }
}

function mapStateToProps({authedUser, users, question}, {id}) {
   return {

   };
}

export default connect(mapStateToProps)(LeaderBoardItem);
