import React from 'react';
import { connect } from 'react-redux'
import Comment from './Comment'
import {bindActionCreators} from 'redux'
import { addComment, updateVote,getRegulation } from '../../../actions/index'

class CommentList extends React.Component {
render(){
  let numComments = this.props.comments.length
  return (
    <div>
    &nbsp;&nbsp;&nbsp;&nbsp;
      <div className="comments-list">
          {this.props.comments.map((comment) => <Comment
            key={comment.id}
            comment_body={comment.description}
          />)
          }
      </div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  )
}
}
const mapStateToProps = (state) => {
  return {
    regualtion: state.currentRegulation.comments
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getRegulation: getRegulation,
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)( CommentList )
