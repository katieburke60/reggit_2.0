import React, { Component } from 'react';
import { connect } from 'react-redux'
import Comment from './Comment'

const CommentList = (props) => {
  debugger
  return (
    <ul>
      {props.regulation.map((element) => <Comment
        key={element.comment.id}
        comment_body={element.comment.description}
      />)
      }
    </ul>
  )
}

//do I need to do this? What value is it adding?
const mapStateToProps = (state) => (regulation: state.currentRegulation)

export default connect(mapStateToProps)(CommentList)
