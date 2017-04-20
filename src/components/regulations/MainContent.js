import React, { Component } from 'react';
import { connect } from 'react-redux'
import CommentList from './comments/CommentList'
import VoteList from './votes/VoteList'
import RegulationBody from './body/RegulationBody'

class MainContent extends Component {
  render() {
    return (
  <div className="col-xs-4">
    <CommentList />
    <VoteList />
    <RegulationBody />
  </div>
)}

//how would I write as an arrow function?
const mapStateToProps = (state) => {
  return {
    regulation: state.currentRegulation
  }
}

export default connect(mapStateToProps)(MainContent)
