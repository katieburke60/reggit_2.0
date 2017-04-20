import React, { Component } from 'react';
// import axios from 'axios'
import {connect} from 'react-redux';
// import Sidebar from "./components/Sidebar"
// import MainContent from "./components/MainContent"

class Regulations extends Component {
  render() {

    let regulations = this.props.regulations.map((regulation) => {
      return <li>{regulation.title}</li>
    })
    debugger
    return (
      <div className="container">
        <h1> Current Regulations </h1>
        <p> Make your voice heard</p>
        <ul>{regulations}</ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      regulations: state.regulations
    }

}
export default connect(mapStateToProps)(Regulations);
