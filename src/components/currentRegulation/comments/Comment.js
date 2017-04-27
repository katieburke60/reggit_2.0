import React from 'react'
import { connect } from 'react-redux'
import {  getRegulation } from '../../../actions'
import {CommentList } from './CommentList'

 class CommentBody extends React.Component {
   render(){
  return (
    <div className="comments-list">
      {this.props.comment_body}
      <p><a href="">Like</a> - <a href="">Share</a></p>
    </div>
)}
}
const mapStateToProps = (state) => {
  return {
    regualtion: state.currentRegulation.comments
  }
}
export default (CommentBody)
