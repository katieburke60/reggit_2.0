import axios from 'axios'
// import { push } from 'react-router-redux'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addComment } from '../../../actions'

class SubmitComment extends Component {
  constructor(props) {
    super(props)
    this.state={
      value: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit= this.handleOnSubmit.bind(this)
    }
    handleOnChange(e) {
      this.setState({value: e.target.value});
    }
    handleOnSubmit(e) {
      let regulation_id = (this.props.regulation.id).to_json
      e.preventDefault()
      axios
        .post('http://localhost:4000/comments',
              {comment:{description: this.state.value, regulation_id: regulation_id}}
             )
        .then((response) => {
          debugger
          this.props.addComment(response.data)
        })
    }
    render() {
      return (
        <form onSubmit={this.handleOnSubmit}>
          <div className="addcomment-container">
              <br/>
              <textarea
                className="regulation-summary"
                rows="7"
                cols="50"
                placeholder="Your feedback"
                value={this.state.value}
                onChange={this.handleOnChange}>
              </textarea>
              <input type="submit" value="submit" className='btn-default' />
          </div>
        </form>
      );
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: function(comment) {
      dispatch({type: 'ADD_COMMENT', comment: comment})
    }
  }
}

export default connect(null, mapDispatchToProps)(SubmitComment)
