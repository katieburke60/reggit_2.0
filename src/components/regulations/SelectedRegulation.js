
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
          <UpAndDownvote regulation={this.props.regulation}/>
          <SubmitComment value={this.props.regulation.comments}/>
          <CommentList comments={this.props.regulation.comments}/>
            <div class="panel panel-default">
              <div class="panel-heading">Panel heading without title</div>
              <div class="panel-body">
                Panel content
              </div>
            </div>
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
