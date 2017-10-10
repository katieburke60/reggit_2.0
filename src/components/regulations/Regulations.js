/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import RegulationListItem from './RegulationsListItem'
import { getCategories, getRegulations } from '../../actions'

class Regulations extends Component {
  componentDidMount(){
    this.props.getCategories()
    this.props.getRegulations()
  }
  render() {
    const regulations = this.props.regulations.map((regulation) => {
        return <RegulationListItem
          key={regulation.id}
          regulation={regulation}
        />
      })
    return (
      <div className="tab-content ">
        <br></br>
          {regulations}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      regulations: state.regulations.filtered
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: function() {
      dispatch(getCategories())
    },
    getRegulations: function() {
      dispatch(getRegulations())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Regulations);
