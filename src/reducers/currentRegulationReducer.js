export default (state={comments: [], regulation_body: {}, votes: []}, action) => {
  switch (action.type) {
    case "SET_CURRENT_REGULATION":
      return action.regulation

    case 'ADD_COMMENT':
      return Object.assign({}, state, {comments: state.comments.concat(action.comment)})
    case 'ADD_VOTE':
      return Object.assign({}, state, {votes: state.votes.concat(action.vote)})

    default:
      return state
  }
}
