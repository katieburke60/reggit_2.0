export default (state={comments: [], regulation_body: {}, votes: []}, action) => {
  switch (action.type) {
    case "SET_CURRENT_REGULATION":
      return action.regulation
    // case "ADD COMMENT":
    //   return currentRegulation: {comments[...this.state.comments, {action.comment}]}
    default:
      return state
  }
}
