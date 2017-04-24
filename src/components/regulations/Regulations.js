/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegulationListItem from './RegulationsListItem'
import { getCategories, getRegulations } from '../../actions'

class Regulations extends Component {
  componentDidMount(){
    this.props.dispatch(getCategories())
    this.props.dispatch(getRegulations())
  }
  render() {
    const regulations = this.props.regulations.map((regulation) => {
        return <RegulationListItem
          key={regulation.id}
          regulation={regulation}

        />
      })
    return (
      <div className="container">
        <div className="col-md-9">
          <h2> What's Happening? </h2>
          {regulations}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      regulations: state.regulations.filtered
    }
}

export default connect(mapStateToProps)(Regulations);
