import React, { Component } from 'react'
import { connect } from 'react-redux'

class CategoryListItem extends Component {
  constructor(props) {
    super(props)

    this.handleCatClicked = this.handleCatClicked.bind(this)
  }

  handleCatClicked(e) {
    e.preventDefault()
    this.props.dispatch({type: "FILTER_CATEGORY", category: this.props.name})
  }

  render () {
    return (
    <li>
      <a href="#"
        onClick={this.handleCatClicked}
        key={this.props.id}>
        {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}
      </a>
    </li>
  )}
}

export default connect()(CategoryListItem);
