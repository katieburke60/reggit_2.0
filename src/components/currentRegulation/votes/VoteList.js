import React from 'react';
import { connect } from 'react-redux'
import Vote from './Vote'

export default class VoteList extends React.Component {
  renderVotes() {
    return this.props.votes.map((vote) => {
         return <Vote
        key={vote.id}
        vote={vote.vote}
      />
    })
  }
  render() {
    return (
      <div>
      
      </div>
    )
  }
}
