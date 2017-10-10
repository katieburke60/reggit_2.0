/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRegulation } from '../../actions'
import { Link } from 'react-router-dom'
import '../../App.css'

class RegulationListItem extends Component {
  render() {
    return (
      <div>
        <div className="tab-pane">
          <p><strong><Link to={`/regulations/${this.props.regulation.id}`}>
          {this.props.regulation.title}</Link> ({this.props.regulation.agency_full})</strong></p>
          <p><i>{this.props.regulation.summary}</i></p>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRegulation: function(regulation){
      dispatch(getRegulation(regulation))
    }
  }
}
export default connect(null, mapDispatchToProps)(RegulationListItem)
