import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signin } from '../actions'

class SigninPage extends React.Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange({target}){
    let key = target.name
    let value = target.value
    this.setState( { [key] : value })
  }
  handleSubmit(e) {
    e.preventDefault
    let params = this.state
    this.props.signin(params)
    // this.props.history.push('/regulations')
  }

  render() {
    return(
      <div>
        {/* <NavbarMain /> */}
        <h2>Please log in or sign up below!</h2><br /><br />
        <label>For returning users: </label>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='email' placeholder="Enter Username" onChange={this.handleChange} />
          <input type='password' name='password' placeholder="Enter Password" onChange={this.handleChange} />
          <input type='submit' value="Log In" />
        </form><br /><br />
        <label>And for new users, please sign in below: </label>
        <form onSubmit={this.handleSignUp}>
          <input type='text' name='email' placeholder="Enter Username" onChange={this.handleChange} />
          <input type='password' name='password' placeholder="Enter Password" onChange={this.handleChange} />
          <input type='submit' value="Sign Up" />
        </form>

      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signin: function(params){
      dispatch(signin(params))
    }
  }
}
export default connect(null, mapDispatchToProps)(SigninPage)
