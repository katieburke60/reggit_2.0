export default (state={}, action) => {
  //should comments, votes, etc. go here like we did with proportion?
  switch (action.type) {
    case "SUBMIT_COMMENT_FOR_REGULATION":
      return {comment:action.regulation.data}
    default:
      return state
  }
}
