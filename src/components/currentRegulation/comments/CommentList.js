import React from 'react';
import { connect } from 'react-redux'
import Comment from './Comment'

const CommentList = (props) => {
  return (
    <div>
      <h3>What people are saying about this rule</h3>
      <ul>
        {props.comments.map((comment) => <Comment
          key={comment.id}
          comment_body={comment.description}
        />)
        }
      </ul>
    </div>
  )
}

export default connect()(CommentList)
