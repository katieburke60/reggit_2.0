
import React, { Component } from 'react';
// import FlatButton from 'material-ui/FlatButton';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class UpAndDownvote extends Component {

  constructor(props) {
    super(props);

    this.state = {
      disabledUpvote: false,
      disabledDownvote: false
    }

  //  this.setState(function(prevState, props) {
  //    return {
  //      counter: prevState.counter + props.increment
  //   };
  // });

    this.handleUpvoteClicked = this.handleUpvoteClicked.bind(this);
    this.handleDownvoteClicked = this.handleDownvoteClicked.bind(this);
  }

  handleUpvoteClicked() {

    if (!this.state.disabledUpvote) {
      this.setState({
        // counter: counter + 1,
        disabledUpvote: true,
        disabledDownvote: false
      });
    }
  }

  handleDownvoteClicked() {
    if (!this.state.disabledDownvote) {
      this.setState({
        // counter: counter - 1,
        disabledUpvote: false,
        disabledDownvote: true
      });
    }
  }

  render() {

    return (
      <div className="votes-container">
        <div style={{ textAlign: "right" }}>
          <button
            label="Upvote"

            disabled={this.state.disabledUpvote}
            onClick={this.handleUpvoteClicked}>Support</button>

          <button
            label="Downvote"
          
            disabled={this.state.disabledDownvote}
            onClick={this.handleDownvoteClicked}>Disagree</button>
        </div>
      </div>
    );
  }
}

export default UpAndDownvote;

