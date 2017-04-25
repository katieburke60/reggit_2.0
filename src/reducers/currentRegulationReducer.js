export default (state={comments: [], regulation_body: {}}, action) => {

  switch (action.type) {
    case "SET_CURRENT_REGULATION":
      return action.regulation
    default:
      return state
  }
}
