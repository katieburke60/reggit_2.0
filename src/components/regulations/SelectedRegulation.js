import React, { Component } from 'react';
import { connect } from 'react-redux'
import CommentList from '../currentRegulation/comments/CommentList'
import VoteList from '../currentRegulation/votes/VoteList'
import RegulationBlob from '../currentRegulation/body/RegulationBlob'

class SelectedRegulation extends Component {
  render() {
    return (
  <div className="col-xs-4">
    <CommentList key={this.props.regulation.id} comments={this.props.regulation.comments}/>
    <VoteList key={this.props.regulation.id} votes={this.props.regulation.votes}/>
    <RegulationBlob key={this.props.regulation.id} body={this.props.regulation.regulation_body}/>
  </div>
  //QUESTION: Can you just do something like regulation_body.html_blob here?
)}
}

const mapStateToProps = (state) => {
  return {
    regulation: state.currentRegulation
  }
}

export default connect(mapStateToProps)(SelectedRegulation)
