/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import CommentList from '../currentRegulation/comments/CommentList'
import VoteList from '../currentRegulation/votes/VoteList'
import RegulationBlob from '../currentRegulation/body/RegulationBlob'
import { getRegulation } from '../../actions'

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
      <div>
        <div className="col-md-10">
          <CommentList comments={this.props.regulation.comments}/>
          <RegulationBlob body={this.props.regulation.regulation_body}/>
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
