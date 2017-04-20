import 'bootstrap/less/bootstrap.less'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Regulations from "./components/regulations/Regulations"
import SelectedRegulation from "./components/regulations/SelectedRegulation"

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="titlename"> REGGIT </h1>
        <p> Make your voice heard</p>
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
