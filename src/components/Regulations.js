import React, { Component } from 'react';
import {connect} from 'react-redux';

class Regulations extends Component {

import RegulationListItem from './RegulationsListItem'

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
