import React from 'react'
import Vote from './Vote'
// import UpAndDownVote from './upAndDownvote'


export default class VoteList extends React.Component {
debugger
  render() {
    let votesFor = this.props.votes.filter((vote) => vote.vote === "up").length

    let votesAgainst = this.props.votes.length - votesFor
    return (
      <div>
        <div>Vote For: {votesFor}</div>
        <div>Vote Against: {votesAgainst}</div>
      </div>
    )
  }
}
