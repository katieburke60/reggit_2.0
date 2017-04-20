import React, { Component } from 'react';
import {connect} from 'react-redux';
<<<<<<< HEAD
<<<<<<< HEAD
// import Sidebar from "./components/Sidebar"
// import MainContent from "./components/MainContent"

class Regulations extends Component {
=======
import RegulationListItem from './RegulationsListItem'

class Regulations extends Component {

>>>>>>> 0a298c0187b07be82e1e03a1c44d196c0ad4601d
=======

class Regulations extends Component {

import RegulationListItem from './RegulationsListItem'

>>>>>>> 5fb366bc85a0afa89c0b80de4a50844ddcc8adfe
  render() {
    const regulations = this.props.regulations.map((regulation) => {
        return <RegulationListItem
          key={regulation.id}
          regulation={regulation}
        />
      })

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
