import React from 'react';
import Comment from './Comment'

export default (props) => {
  const numComments = props.comments.length
  return (
    <div>
    &nbsp;&nbsp;&nbsp;&nbsp;
      <div className="comments-list">
          {props.comments.map((comment) => <Comment
            key={comment.id}
            comment_body={comment.description}
          />)
          }
      </div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  )
}
