
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addVote } from '../../../actions'
import { SelectedRegulation } from '../../regulations/SelectedRegulation'

class UpAndDownVote extends Component {
  constructor(props) {
    super(props);
    this.handleDownVoteClicked = this.handleDownVoteClicked.bind(this);
    this.handleUpVoteClicked = this.handleUpVoteClicked.bind(this);
  }

  handleDownVoteClicked (event) {
    event.preventDefault();
    this.props.submitVote(this.props.regulationId, "down")
  }

  handleUpVoteClicked (event) {
    event.preventDefault();
    this.props.submitVote(this.props.regulationId, "up")

  }

  render() {
    return (
    <div>
      <div className="header1">What do you think?</div>
      <div className="votes-container">
          <button className="btn-default" onClick={this.handleUpVoteClicked}>I'm for it</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn-default" onClick={this.handleDownVoteClicked}>I'm against it</button>

      </div>
    </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    submitVote: function(regulationId, vote){
      dispatch(addVote(regulationId, vote))
    }

  }

}
export default connect(null, mapDispatchToProps)(UpAndDownVote)
