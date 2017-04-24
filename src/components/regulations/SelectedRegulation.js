/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import CommentList from '../currentRegulation/comments/CommentList'
import VoteList from '../currentRegulation/votes/VoteList'
import RegulationBlob from '../currentRegulation/body/RegulationBlob'
import UpAndDownvote from '../currentRegulation/votes/UpAndDownvote'
import SubmitComment from '../currentRegulation/submitComments/SubmitComment'

class SelectedRegulation extends Component {
  render() {
    return (
      <div>
  <div className="col-xs-10">
    <VoteList votes={this.props.regulation.votes}/>
    <CommentList comments={this.props.regulation.comments}/>
    <RegulationBlob body={this.props.regulation.regulation_body}/>
  </div>
  <div className="col-xs-2">
    <UpAndDownvote regulation={this.props.regulation}/>
    <SubmitComment value={this.props.regulation.comments}/>

  </div>
  </div>
)}
}

const mapStateToProps = (state) => {

  return {

    regulation: state.currentRegulation

  }
}

export default connect(mapStateToProps)(SelectedRegulation)
