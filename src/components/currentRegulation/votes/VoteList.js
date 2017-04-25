
import React from 'react'
import { SelectedRegulation } from '../../regulations/SelectedRegulation'
import { connect } from 'react-redux'

 class VoteList extends React.Component {

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
const mapStateToProps = (state) => {
  return {
    regulation: state.currentRegulation.votes
  }
}

export default connect(mapStateToProps)(VoteList)
