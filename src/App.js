import 'bootstrap/less/bootstrap.less'
import React, { Component } from 'react';
// import axios from 'axios'
import {connect} from 'react-redux';

// import CurrentRegulationMainPage from "./components/CurrentRegulationMainPage"
import Regulations from "./components/Regulations"
import RegulationListMainPage from "./components/RegulationListMainPage"
class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="titlename"> REGGIT </h1>
        <p> Make your voice heard</p>

         <RegulationListMainPage />
        {/* <CurrentRegulationMainPage />  */}
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
