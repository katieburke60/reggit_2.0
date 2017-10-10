/* eslint-disable */
import { connect } from 'react-redux'
import Regulations from './components/regulations/Regulations'
import OverallList from './components/categories/OverallList'
import SelectedRegulation from './components/regulations/SelectedRegulation'
import './App.css'
import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import { BrowserRouter } from 'react-router'
import NavBarMain from './components/NavBarMain'
// import Grid from 'react-bootstrap/lib/Grid'
// import Row from 'react-bootstrap/lib/Row'


class App extends Component {
  render() {
    return (
      <div className="wrap full-width">
        <div className="topper">
          <h1 className="titlename"> Reggit         </h1>
          <div className="subtitle">Get heard</div>
        </div>
        <NavBarMain />
        <OverallList />
        <Regulations />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    regulation: state.currentRegulation,
    categories: state.categories
  }}

export default connect(mapStateToProps)(App);
