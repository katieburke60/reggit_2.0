//this page is not being hit

import React from 'react'
import { connect } from 'react-redux'
import MainContent from './MainContent'

const SelectedRegulation = (props) => {
  return (
    <div>
      <MainContent
        key={props.regulation.id}
        comments={props.regulation.comments}
        votes={props.regulation.votes}
        full_body={props.regulation.regulation_body.html_blob}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    regulation: state.currentRegulation
  }
}

export default connect(mapStateToProps)(SelectedRegulation)
