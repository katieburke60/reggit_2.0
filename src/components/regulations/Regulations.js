/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegulationListItem from './RegulationsListItem'

class Regulations extends Component {
  render() {
    const regulations = this.props.regulations.map((regulation) => {
        return <RegulationListItem
          key={regulation.id}
          regulation={regulation}

        />
      })

    return (
      <div className="container">
        <div className="col-md-8">
          <h2> What's Happening? </h2>
          {regulations}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    //TODO: need to figure out how to make filtered equal to all in some situations
      regulations: state.regulations.filtered
    }
}

export default connect(mapStateToProps)(Regulations);
