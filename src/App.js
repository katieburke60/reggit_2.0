
import React, { Component } from 'react';
// import axios from 'axios'
import {connect} from 'react-redux';
// import Sidebar from "./components/Sidebar"
// import MainContent from "./components/MainContent"
import Regulations from "./components/Regulations"

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="titlename"> REGGIT </h1>
        <p> Make your voice heard</p>
        <Regulations />
         {/* <Sidebar /> */}
        {/* <MainContent />  */}
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//       regulations: state.regulations
//     }
//
// }
// mapStateToProps
export default connect()(App);
