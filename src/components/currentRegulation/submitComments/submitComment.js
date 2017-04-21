import React, { Component } from 'react';

class SubmitComment extends Component {

  constructor(props) {
    super(props);
        this.state = {
                      value: '',}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value:event.target.value});
    }

    handleSubmit(event) {
      event.prevetnDefault();
      this.props.onSubmit({
        value
      })
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="addcomment-container">
              <p>Add your comment about this regulation.</p>
              <textarea rows="10" cols=90% value={this.state.value} onChange={this.handleChange}></textarea>
              <input type="submit" value="Submit your Voice!" />
          </div>
        </form>
      );
    }

}

export default SubmitComment;
