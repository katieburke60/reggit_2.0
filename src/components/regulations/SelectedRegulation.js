/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import CommentList from '../currentRegulation/comments/CommentList'
import VoteList from '../currentRegulation/votes/VoteList'
import RegulationBlob from '../currentRegulation/body/RegulationBlob'
import { getRegulation } from '../../actions'
import UpAndDownvote from '../currentRegulation/votes/upAndDownvote'
import SubmitComment from '../currentRegulation/submitComments/submitComment'


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
      <div className='row'>
        <div className="col-md-7">
          <RegulationBlob body={this.props.regulation.regulation_body}/>
        </div>
        <div>
          <CommentList comments={this.props.regulation.comments}/>
          <UpAndDownvote regulation={this.props.regulation}/>
          {/* <VoteList votes={this.props.regulation.votes}/> */}
          <SubmitComment value={this.props.regulation.comments}/>
        </div>
      </div>
    )}
  }

const mapStateToProps = (state) => {
  return {
    regulation: state.currentRegulation,
    regulations: state.regulations.all
  }
}

export default connect(mapStateToProps)(SelectedRegulation)
