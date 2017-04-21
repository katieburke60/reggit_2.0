import React from 'react';
import Vote from './Vote'
// import VoteCount from './VoteCount'

export default class VoteList extends React.Component {

//   renderVotes() {
//     return this.props.votes.map((vote) => {
//          return <Vote key={vote.id} vote={vote.vote}/>
//     })
//   }

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
