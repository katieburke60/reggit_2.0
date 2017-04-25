import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryListItem from './CategoryListItem'

class CategoryList extends Component {
  constructor(props) {
    super (props)
    this.handleAllClicked = this.handleAllClicked.bind(this)
  }

  handleAllClicked(e) {
    e.preventDefault()
    this.props.dispatch({type: "CLEAR_FILTER"})
  }

  render() {
    const categories = this.props.categories.map((category) => {
      return <CategoryListItem
        key={category.id}
        name={category.name}
      />
    })
    return (
      <div id="exTab2" className="cats">
      <ul className="nav nav-tabs">
        <li className="active"><a href="#1a" data-toggle="tab" onClick={this.handleAllClicked}>All Regs</a></li>
            {categories}
      </ul>

    </div>
    )
  }
}
const mapStateToProps = (state) => ({
    categories: state.categories
})

export default connect(mapStateToProps)(CategoryList);
