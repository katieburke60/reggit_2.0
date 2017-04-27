import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class SubmitComment extends Component {
 constructor(props) {
   super(props)
   this.state={
     description: ''
   }
   this.handleChange = this.handleChange.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)
   }
 handleChange(event) {
   this.setState({
     description: event.target.value
   })
 }
 handleSubmit(e) {
   e.preventDefault()
   return (
     axios
       .post('http://localhost:4000/comments',
       { description: this.state.description, regulation: this.props.regulation })
       .then(({data}) => {
           this.props.addComment(data)
        })
        .then(
          this.setState ({
            description: ''
          }))
     )
   }
 render() {
   return (
     <form onSubmit={this.handleSubmit}>
       <div className='addcomment-container'>
           <br/>
           <textarea className='regulation-summary'
               value={this.state.description}
               rows='5' cols='50'
               onChange={this.handleChange}
               placeholder='Your feedback'></textarea>
           <input type='submit' className='btn-default regulation-summary' />
       </div>
     </form>
   );
 }
}
 function addComment(comment) {
   return {
     type: 'ADD_COMMENT',
     comment: comment
   }
 }
const mapStateToProps = (state) => {
  return {
    regulation: state.currentRegulation
  }
}
 const mapDispatchToProps = (dispatch) => {
   return {
     addComment: function(comment){
       dispatch(addComment(comment))
     }
   }
 }
export default connect(mapStateToProps, mapDispatchToProps)(SubmitComment)
