export default (state={}, action) => {

  switch (action.type) {
    case "SET_CURRENT_REGULATION":
  
      return action.regulation
    default:
      return state
  }
}
