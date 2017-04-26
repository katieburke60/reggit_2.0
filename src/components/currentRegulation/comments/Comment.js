import React from 'react'

export default (props) => {
  return (
    <div className="comments-list">
      <h4>Username</h4>
      {props.comment_body}
      <p><a href="">Like</a> - <a href="">Share</a></p>
    </div>
)}
