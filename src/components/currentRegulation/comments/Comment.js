import React from 'react'
import { connect } from 'react-redux'

const Comment = (props) => {
  return (
    <li>
      {props.comment_body}
    </li>
)}

export default connect()(Comment)
