import React from 'react'
import { connect } from 'react-redux'

const Comment = (props) => {
  return (
    <li>
      {props.comment}
    </li>
)}


export default connect()(Comment)
