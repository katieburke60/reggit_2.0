/* eslint-disable */
import { connect } from 'react-redux'
import Regulations from './components/regulations/Regulations'
import CategoryList from './components/categories/CategoryList'
import SelectedRegulation from './components/regulations/SelectedRegulation'
import './App.css'
import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import { BrowserRouter } from 'react-router'


class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="titlename"> Reggit: Get heard </h1>
        <div>{<CategoryList />}</div>
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
