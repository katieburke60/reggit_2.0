import React, { Component } from ‘react’;
import { connect } from ‘react-redux’
import { addComment } from ‘../../../actions’

class SubmitComment extends Component {
 constructor(props) {
   super(props)
   this.state={
     description: ‘’
   }
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit= this.handleSubmit.bind(this)
   }
   handleChange(e) {
       this.setState({
          description: e.target.value});
   }
   handleSubmit(e) {
    e.preventDefault();
    debugger
    this.props.addComment(this.props.regulation_id, this.state.description);
  }
   render() {
     return (
       <form onSubmit={this.handleSubmit}>
         <div className='addcomment-container'>
             <br/>
             <textarea rows='5' cols='50' placeholder='Your feedback' value={this.state.value} onChange={this.handleChange} ></textarea>
             <input type='submit' />
         </div>
       </form>
     );
   }
 }
 const mapStateToProps = (state) => {
   description: state.description
 }
 const mapDispatchToProps = (dispatch) => {
   return {
     addComment: function(regulation_id, description){
       dispatch(addComment(regulation_id, description))
     }
   }
 }
export default connect(mapStateToProps, mapDispatchToProps)(SubmitComment)
