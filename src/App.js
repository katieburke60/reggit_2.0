// import 'bootstrap/less/bootstrap.less'
import { connect } from 'react-redux'
import Regulations from './components/regulations/Regulations'
import SelectedRegulation from './components/regulations/SelectedRegulation'
import React, { Component } from 'react'
// import { Navbar, Jumbotron, Button } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="titlename"> Reggit: Get heard </h1>
         {this.props.regulation && this.props.regulation.id ? <SelectedRegulation /> : <Regulations />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    regulation: state.currentRegulation
  }
}

export default connect(mapStateToProps)(App);
