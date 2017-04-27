export default (state={comments: [], regulation_body: {}, votes: []}, action) => {
  switch (action.type) {
    case "SET_CURRENT_REGULATION":
      return action.regulation
    case 'ADD_COMMENT':
      return {
          comments: state.comments.concat(action.comment),
          regulation_body: state.regulation_body,
          votes: state.votes,
        }
    default:
      return state
  }
}
