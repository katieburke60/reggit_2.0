import React from 'react'
import { connect } from 'react-redux';
import { login, registration } from '../../actions'
// import { push } from 'react-router-redux'

class LoginPage extends React.Component {
  constructor(){
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }
  handleChange({target}){
    let key = target.name
    let value = target.value
    this.setState({ [key]: value })
  }
  handleLogin(e){
    e.preventDefault()
    this.props.login(this.state)
  }

  handleSignUp(e){
    e.preventDefault()
    this.props.registration(this.state)
  }

  render() {
    return(
      <div className='container'>
        <h2>Please log in or sign up below!</h2><br /><br />
        <label>For returning users: </label>
        <form id='signin' onSubmit={this.handleLogin}>
          <div>
            <label>Email</label>
            <input type='text' id='email' name='email' onChange={this.handleChange} />
          </div>
          <div>
            <label>Password</label>
            <input type='password' id='password' name='password' onChange={this.handleChange} />
          </div>
          <input type='submit' value="Log In" />
        </form><br /><br />

        <label>And for new users, please sign in below: </label>
        <form id='signup' onSubmit={this.handleSignUp}>
          <div>
            <label>Email</label>
            <input type='text' id='email' name='email' onChange={this.handleChange} />
          </div>
          <div>
            <label>Password</label>
            <input type='password' id='password' name='password' onChange={this.handleChange} />
          </div>
          <input type='submit' value="Sign Up" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: function(params) {
      dispatch(login(params))
    },
    registration: function(params) {
      dispatch(registration(params))
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
