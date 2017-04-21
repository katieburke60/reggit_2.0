import React from 'react';
import Vote from './Vote'
// import VoteCount from './VoteCount'

export default class VoteList extends React.Component {
  renderVotes() {
    return this.props.votes.map((vote) => {
         return <Vote key={vote.id} vote={vote.vote}/>
    })
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}
