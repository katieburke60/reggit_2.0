
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Vote from './Vote'
import RegulationBlob from '../body/RegulationBlob'
import SelectedRegulation from '../../regulations/SelectedRegulation'
import { addVote } from '../../../actions'

class UpAndDownVote extends Component {

  constructor(props) {
    super(props);

    this.handleDownVoteClicked = this.handleDownVoteClicked.bind(this);
    this.handleUpVoteClicked = this.handleDownVoteClicked.bind(this);

  }

  handleDownVoteClicked (event) {
    event.preventDefault();
    this.props.submitVote(this.props.regulation, "down")
  }
  handleUpVoteClicked (event) {
    event.preventDefault();
    this.props.submitVote(this.props.regulation, "up")
  }

  render() {
    return (
      <div style={{color: 'red'}} className="votes-container">
          <button onClick={this.handleUpVoteClicked}>Agree</button>
          <button onClick={this.handleDownVoteClicked}>Disagree</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitVote: function(regulation, vote){
      dispatch(addVote(regulation, vote))
    }
  }
}
export default connect(null, mapDispatchToProps)(UpAndDownVote)
