import React, { Component } from 'react';
import {connect} from 'react-redux'

class SubmitComment extends Component {

  constructor(props) {
    super(props);
        this.state = {
          value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
          value:event.target.value});
    }

    handleSubmit(event) {
      event.prevetnDefault();
    //   this.props.dispatch(submitComment(regulationId, commentBody))
 }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="addcomment-container">
              <h3>Speak Up!</h3>
              <textarea rows="10" cols="50" value={this.state.value} onChange={this.handleChange}></textarea>
              <input type="submit" value="Submit your Voice!" />
          </div>
        </form>
      );
    }

}

export default connect()(SubmitComment);
