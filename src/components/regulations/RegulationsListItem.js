/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import { getRegulation } from '../../actions'

const RegulationListItem = (props) => {
  return (
    <div>
      <li>
        <a onClick={(e) => {
        e.preventDefault()
        props.fetchRegulation(props.regulation)
        }} href="#">{props.regulation.title}</a>
      </li>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRegulation: function(regulation){
      dispatch(getRegulation(regulation))
    }
  }
}
export default connect(null, mapDispatchToProps)(RegulationListItem)
