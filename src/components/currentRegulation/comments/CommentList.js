import React from 'react';
import Comment from './Comment'

export default (props) => {
  const numComments = props.comments.length
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-1">
        </div>
        <div className="col-md-4">
          <div className="page-header">
            <h1><small className="pull-right"> {numComments} comments</small> Comments </h1>
          </div>
          <div className="comments-list">
                {props.comments.map((comment) => <Comment
                  key={comment.id}
                  comment_body={comment.description}
                />)
                }
          </div>
        </div>
      </div>
    </div>
  )
}
