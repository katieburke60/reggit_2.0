import React from 'react'

export default (props) => {
  return (
    <div className="media">
      <p className="pull-right"><medium># days ago</medium></p>
    <div className="media-body">
      <h4 className="media-heading user_name">Username</h4>
      {props.comment_body}
      <p><medium><a href="">Like</a> - <a href="">Share</a></medium></p>
    </div>
    </div>
)}
