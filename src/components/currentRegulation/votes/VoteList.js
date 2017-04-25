import React from 'react';

export default class VoteList extends React.Component {
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
