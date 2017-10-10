import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccountRegs, getAllRegs, getDeadlineSoonRegs, getNewlyPosted } from '../../actions'

class OverallList extends Component {
  constructor(props) {
    super (props)
    this.handleAllClicked = this.handleAllClicked.bind(this)
    this.handleDeadlineFilter = this.handleDeadlineFilter.bind(this)
    this.handleNewPostFilter = this.handleNewPostFilter.bind(this)
    this.handleFollowingFilter = this.handleFollowingFilter.bind(this)
  }

  handleAllClicked(e) {
    e.preventDefault()
    this.props.getAllRegs()
  }
  handleDeadlineFilter(e) {
    e.preventDefault()
    this.props.getDeadlineSoonRegs()
  }
  handleNewPostFilter(e) {
    e.preventDefault()
    this.props.getNewlyPosted()
  }
  handleFollowingFilter(e) {
    e.preventDefault()
    this.props.getAccountRegs()
  }

  render() {
    return (
      <div>
        {/* <h1>{}</h1> */}
        <div id="exTab2" className="cats">
          <ul className="nav nav-tabs">
            <li className="active"><a href="#1a" data-toggle="tab" onClick={this.handleAllClicked}>All Regs</a></li>
            <li><a href="#1a" data-toggle="tab" onClick={this.handleDeadlineFilter}>Deadline soon</a></li>
            <li><a href="#1a" data-toggle="tab" onClick={this.handleNewPostFilter}>Newly posted</a></li>
            <li><a href="#1a" data-toggle="tab" onClick={this.handleFollowingFilter}>My Rules</a></li>
          </ul>
          </div>
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAccountRegs: function() {
      dispatch(getAccountRegs())
    },
    getAllRegs: function() {
      dispatch(getAllRegs())
    },
    getDeadlineSoonRegs: function() {
      dispatch(getDeadlineSoonRegs())
    },
    getNewlyPosted: function() {
      dispatch(getNewlyPosted())
    },
  }
}

export default connect(null, mapDispatchToProps)(OverallList);
