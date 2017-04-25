import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createComment} from '../../../actions'

class SubmitComment extends Component {

  constructor(props) {
    super(props);
        this.state = {
          comment: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
          value:event.target.value});
    }

    handleSubmit(e) {
     e.preventDefault();
     var comment = this.state.comment;
     this.props.onCommentSubmit(this.props.regulation,comment: comment);
     this.setState({ comment: ''});
   }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="addcomment-container">
              <h3>Speak Up!</h3>
              <textarea rows="10" cols="50" placeholder="Say something..." value={this.state.value} onChange={this.handleChange} ></textarea>
              <input type="submit" value="Submit your Voice!" />
          </div>
        </form>
      );
    }
  }
    const mapDispatchToProps = (dispatch) => {
      return {
        onCommentSubmit: function(regulation, comment){
          dispatch(createComment(regulation, comment))
        }
      }
    }


export default connect('',mapDispatchToProps)(SubmitComment)
