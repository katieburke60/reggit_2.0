import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment, getRegulation} from '../../../actions'
import {bindActionCreators} from 'redux'
import { SelectedRegulation } from '../../regulations/SelectedRegulation'


class SubmitComment extends Component {
 constructor(props) {
   super(props)

   this.state={
     description: ''
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
   regulation: state.currentRegulation.comments
 }
 const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
     addComment: addComment,
   }, dispatch);
 }
export default connect(mapStateToProps, mapDispatchToProps)(SubmitComment)
