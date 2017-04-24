/* eslint-disable */
import { connect } from 'react-redux'
import Regulations from './components/regulations/Regulations'
import CategoryList from './components/categories/CategoryList'
import SelectedRegulation from './components/regulations/SelectedRegulation'
import React, { Component } from 'react'
import './App.css'

// import { Navbar, Jumbotron, Button } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="titlename"> Reggit: Get heard </h1>
         <div>{<CategoryList />}</div>
         <div>{this.props.regulation && this.props.regulation.id ? <SelectedRegulation /> : <Regulations />}</div>
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
