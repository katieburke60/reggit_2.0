/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import CommentList from '../currentRegulation/comments/CommentList'
import VoteList from '../currentRegulation/votes/VoteList'
import RegulationBlob from '../currentRegulation/body/RegulationBlob'
import { getRegulation } from '../../actions'
import UpAndDownvote from '../currentRegulation/votes/upAndDownvote'
import SubmitComment from '../currentRegulation/comments/submitComment'
import ActionFollowButton from '../currentRegulation/follows/ActionFollowButton'

class SelectedRegulation extends Component {

  componentWillMount() {
    let regulationId = this.props.match.params.regulationId
    this.props.getRegulation(regulationId)
  }

  render() {
    return (
      <div className="wrap full-width">
        <div className="topper">
          <h1 className="titlename"> Reggit         </h1>
          <div className="subtitle">Get heard</div>
        </div>
        <div>
          <div className="col-sm-8">
            <div className="regulation-title">
              {this.props.regulation.title}
            </div>
            <div className="regulation-summary">
              {this.props.regulation.summary}
            </div>
            <div className="reg-other">Topic: {this.props.regulation.category_name}</div>
            <div className="reg-other">Status: {this.props.regulation.status}</div>
            <div>Agency POC: {this.props.regulation.contact}</div>
            <br/>
            <p className='reg-detail-flag'>Get Smart: Here's The Full Reg Text</p>
            <div className="reg-text">
              {/* <RegulationBlob body={this.props.regulation.action_body}/> */}
            </div>
          </div>
          <div className="col-sm-4">
            <ActionFollowButton regulation={this.props.regulation}/>
            <VoteList regulation={this.props.regulation}/>
            <CommentList comments={this.props.regulation.comments}/>
            <UpAndDownvote regulation={this.props.regulation}/>
            <SubmitComment />
          </div>
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
const mapDispatchToProps = (dispatch) => {
  return {
    getRegulation: (regulationId) => dispatch(getRegulation(regulationId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedRegulation)
