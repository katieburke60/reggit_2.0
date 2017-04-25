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
      <div className="wrap full-width">
        <div className="topper">
          <h1 className="titlename"> Reggit         </h1>
          <div className="subtitle">Get heard</div>
        </div>
        <div>
          <div className="col-md-8">
            <div className="regulation-title">
              {this.props.regulation.title}
            </div>
            <div className="regulation-summary">
              {this.props.regulation.summary}
            </div>
            <div className="reg-other">Topic: {this.props.regulation.category_name}</div>
            <div className="reg-other">Status: {this.props.regulation.reg_status}</div>
            <br/>
            <p className='reg-detail-flag'>Get Smart: Here's The Full Reg Text</p>
            <div className="reg-text">
              <RegulationBlob body={this.props.regulation.regulation_body}/>
            </div>
          </div>
          <div className="col-md-4">
            <CommentList comments={this.props.regulation.comments}/>
            <UpAndDownvote regulation={this.props.regulation}/>
            {/* <VoteList regulation={this.props.regulation}/> */}
            <SubmitComment value={this.props.regulation.comments}/>
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

export default connect(mapStateToProps)(SelectedRegulation)
