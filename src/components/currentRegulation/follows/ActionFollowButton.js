
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionFollow, actionUnfollow } from '../../../actions'

class ActionFollowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFollowButton: true
    }
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }
  handleFollow (e) {
    e.preventDefault()
    this.props.actionFollow(this.props.regulation)
    this.setState({showFollowButton: !this.state.showFollowButton})
  }
  handleUnfollow (e) {
    e.preventDefault()
    this.props.actionUnfollow(this.props.regulation)
    this.setState({showFollowButton: !this.state.showFollowButton})
  }

  render() {
    return (
    <div>
      <div className="header1">Follow This Action</div>
      <div className="follows-container">
          {this.state.showFollowButton && <button className="btn-default" onClick={this.handleFollow}>Follow</button>}
          {!this.state.showFollowButton && <button className="btn-default" onClick={this.handleUnfollow}>Unfollow</button>}
      </div>
    </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actionFollow: function(regulation){
      dispatch(actionFollow(regulation))
    },
    actionUnfollow: function(regulation){
      dispatch(actionUnfollow(regulation))
    }
  }
}
export default connect(null, mapDispatchToProps)(ActionFollowButton)
