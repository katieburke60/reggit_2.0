
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addVote } from '../../../actions'
import { SelectedRegulation } from '../../regulations/SelectedRegulation'

 class VoteList extends React.Component {

  render() {

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
    regulation: state.currentRegulation
  }
}

export default connect(mapStateToProps)(VoteList)
