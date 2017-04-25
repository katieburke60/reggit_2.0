
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addVote } from '../../../actions'

class UpAndDownVote extends Component {

  constructor(props) {
    super(props);

    this.handleDownVoteClicked = this.handleDownVoteClicked.bind(this);
    this.handleUpVoteClicked = this.handleUpVoteClicked.bind(this);
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
    <div>
      <h1> Vote on this Regulation</h1>
      <label>I agree with this proposal!</label>
      <div style={{color: 'green'}} className="votes-container">
          <button onClick={this.handleDownVoteClicked}>Click to Agree</button>
      </div>
      <label> I disagree with this proposal!</label>
      <div style={{color: 'red'}} className="votes-container">
          <button onClick={this.handleDownVoteClicked}>Click to Disagree</button>
      </div>

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
