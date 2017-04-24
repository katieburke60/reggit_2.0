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
      <div id="sidebar" className="sidebar" >
        <div className="col-md-2">
          <button
            className="btn-main btn-outline-default btn-space"
            onClick={this.handleAllClicked}>
            All Regs
          </button>
          <p>{categories}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    categories: state.categories
})

export default connect(mapStateToProps)(CategoryList);
