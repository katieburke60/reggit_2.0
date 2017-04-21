import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryListItem from './CategoryListItem'

class CategoryList extends Component {
  render() {
    const categories = this.props.categories.map((category) => {
      return <CategoryListItem
        key={category.id}
        name={category.name}
      />
    })
    return (
      <div className="container">
        <h4> Categories </h4>
        <p>{categories}</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
    categories: state.categories
})

export default connect(mapStateToProps)(CategoryList);
