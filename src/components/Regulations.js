import React, { Component } from 'react';
// import axios from 'axios'
import {connect} from 'react-redux';
// import Sidebar from "./components/Sidebar"
// import MainContent from "./components/MainContent"


class Regulations extends Component {
  render() {
    return (
      <div className="container">
        <h1> Current Regulations </h1>
        <p> Make your voice heard</p>
        
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
