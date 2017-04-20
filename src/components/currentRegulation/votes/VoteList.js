import React from 'react';
import { connect } from 'react-redux'
import Vote from './Vote'

const VoteList = (props) => {
  return (
    <ul>
      {props.votes.map((vote) => <Vote
        key={vote.id}
        vote={vote.vote}
      />)
      }
    </ul>
  )
}

export default connect()(VoteList)
