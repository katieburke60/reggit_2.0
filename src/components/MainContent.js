//never hits this page!

import React, { Component } from 'react';
import { connect } from 'react-redux'
import Comment from './Comment'

class MainContent extends Component {
  render() {
    const comments = this.props.comments.map((element) => {
      return <Comment
        key={element.id}
        comment={element.description}
      />
    })
    return (
      <div className="container">
        <ul>{comments}</ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    regulation: state.currentRegulation
    //should it be "currentRegulation"? how do you pull the right one?
  }
}
export default connect(mapStateToProps)(MainContent)
