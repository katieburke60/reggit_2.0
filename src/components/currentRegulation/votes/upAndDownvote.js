
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addVote, updateVote, getRegulation } from '../../../actions'
import { bindActionCreators } from 'redux'
import { SelectedRegulation } from '../../regulations/SelectedRegulation'

class UpAndDownVote extends Component {
  constructor(props) {
    super(props)
    this.handleDownVoteClicked = this.handleDownVoteClicked.bind(this);
    this.handleUpVoteClicked = this.handleUpVoteClicked.bind(this);
  }

  handleDownVoteClicked (event) {
    event.preventDefault();
    this.props.addVote(this.props.regulation.id, "down")
    this.props.getRegulation(this.props.regulation.id)
  }

  handleUpVoteClicked (event) {

    event.preventDefault();
    this.props.addVote(this.props.regulation.id, "up")
    this.props.getRegulation(this.props.regulation.id)
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
const mapStateToProps = (state) => {
  regulation: state.currentRegulation.votes
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addVote: addVote,
    getRegulation: getRegulation ,
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(UpAndDownVote)
