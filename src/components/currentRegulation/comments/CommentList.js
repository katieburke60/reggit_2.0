import React from 'react';
import Comment from './Comment'

export default (props) => {
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
