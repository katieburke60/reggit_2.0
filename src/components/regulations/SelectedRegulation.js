
/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import CommentList from '../currentRegulation/comments/CommentList'
import VoteList from '../currentRegulation/votes/VoteList'
import RegulationBlob from '../currentRegulation/body/RegulationBlob'
import { getRegulation } from '../../actions'
import UpAndDownvote from '../currentRegulation/votes/upAndDownvote'
import SubmitComment from '../currentRegulation/submitComments/submitComment'
import '../../App.css'

class SelectedRegulation extends Component {
  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.match.params.regulationId === this.props.match.params.regulationId) { return }
  //   let regulationId = nextProps.match.params.regulationId
  //   this.props.dispatch(getRegulation(regulationId))
  // }
  componentDidMount() {
    let regulationId = this.props.match.params.regulationId
    this.props.dispatch(getRegulation(regulationId))
  }

  render() {
    return (
      <div class="container-fluid">
        <div className="col-md-8">
          <RegulationBlob body={this.props.regulation.regulation_body}/>
        </div>
        <div className="col-xs-2">
          <UpAndDownvote votes={this.props.regulation.votes} regulation={this.props.regulation.id}/>
          <SubmitComment value={this.props.regulation.comments}/>
          <CommentList comments={this.props.regulation.comments}/>
          <VoteList value={this.props.regulation.votesFor} />

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
