import React from 'react';
import { connect } from 'react-redux'
import Vote from './Vote'

class VoteList extends React.Component {
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
        <h3>Votes in favor of this regulation</h3>
        <ul>
          {this.renderVotes()}
        </ul>
      </div>
    )
  }
}

export default connect()(VoteList)
