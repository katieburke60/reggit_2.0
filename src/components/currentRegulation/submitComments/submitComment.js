import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addComment } from '../../../actions'

class SubmitComment extends Component {
  constructor(props) {
    super(props)
    this.state={
      comment: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({
           comment: e.target.value});
    }
    handleSubmit(e) {
     e.preventDefault();
     this.props.submitComment(this.props.regulation, this.props.comment);
   }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="addcomment-container">
              <br/>
              <textarea rows="5" cols="50" placeholder="Your feedback" value={this.state.value} onChange={this.handleChange} ></textarea>
              <input type="submit" />
          </div>
        </form>
      );
    }
  }
  const mapStateToProps = (state) => {
    comment: state.comment
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      submitComment: function(regulation, comment){
        dispatch(addComment(regulation, comment))
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(SubmitComment)
