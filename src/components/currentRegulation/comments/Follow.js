import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { toggleFollow } from '../../../actions'

class FollowRule extends Component {
  constructor(props) {
    super(props)

    this.toggleFollow = this.toggleFollow.bind(this)
    }

  toggleFollow(e) {
    e.preventDefault()
    store.dispatch({
      type: 'TOGGLE_TODO',
      regulation: this.props.regulation
    })
  }

  render() {
    return (
      <button onClick={this.toggleFollow}>Follow Rule</button>
    )
  }
}


const mapStateToProps = (state) => {
 return {
   regulation: state.currentRegulation
 }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: function(regulation){
      dispatch(toggleFollow(regulation))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FollowRule)
