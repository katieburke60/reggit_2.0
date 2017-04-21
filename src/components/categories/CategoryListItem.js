import React from 'react'
import { connect } from 'react-redux'

const CategoryListItem = (props) => {
  return (
    <div>
      <button key={props.id}>{props.name}</button>
    </div>
  )
}

export default connect()(CategoryListItem);


// onClick={(e) => {
//   e.preventDefault()
//   props.dispatch({type: "FILTER_CATEGORY", category: name})
// }}
