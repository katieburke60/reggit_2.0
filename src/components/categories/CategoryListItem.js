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
  return <button
    key={this.props.id}
    className="btn-cat btn-outline-default btn-space"
    onClick={this.handleCatClicked}>
    {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}</button>
  }
}

export default connect()(CategoryListItem);
