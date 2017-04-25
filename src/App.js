/* eslint-disable */
import { connect } from 'react-redux'
import Regulations from './components/regulations/Regulations'
import CategoryList from './components/categories/CategoryList'
import SelectedRegulation from './components/regulations/SelectedRegulation'
import './App.css'
import { Route } from 'react-router-dom'
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="container wrap full-width">
        <div className="topper">
          <h1 className="titlename"> Reggit         </h1>
          <div className="subtitle">Get heard</div>
        </div>
        <CategoryList />
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
