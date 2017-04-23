import React from 'react'
import { connect } from 'react-redux'

const CategoryListItem = (props) => {
  return <button key={props.id} className="btn-cat btn-outline-default btn-sm btn-space">
    {props.name.charAt(0).toUpperCase() + props.name.slice(1)}</button>
}

export default connect()(CategoryListItem);


// onClick={(e) => {
//   e.preventDefault()
//   props.dispatch({type: "FILTER_CATEGORY", category: name})
// }}
