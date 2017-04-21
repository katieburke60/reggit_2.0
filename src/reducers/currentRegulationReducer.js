export default (state={}, action) => {

  switch (action.type) {
    case "SET_CURRENT_REGULATION":
    debugger
      return action.regulation
    default:
      return state
  }
}
