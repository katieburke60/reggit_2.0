import React from 'react'
import { connect } from 'react-redux'
import { getRegulation } from '../actions'

const RegulationListItem = (props) => {
  return (
    <li><a onClick={(e) => {
      debugger
      e.preventDefault()
      props.fetchRegulation(props.regulation)
    }} href="#">{props.regulation.title}</a></li>
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
