import React from 'react';

export default class VoteList extends React.Component {
  render() {
      debugger
    let votesFor = this.props.regulation.votes.filter((vote) => vote.vote === "up").length
    let votesAgainst = this.props.regulation.votes.length - votesFor
    return (
      <div>
        <div>Vote For: {votesFor}</div>
        <div>Vote Against: {votesAgainst}</div>
      </div>
    )
  }
}
