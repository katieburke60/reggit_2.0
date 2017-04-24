export default (state={}, action) => {
  //should comments, votes, etc. go here like we did with proportion?
  switch (action.type) {
    case "SET_CURRENT_REGULATION":

      return action.regulation

    default:
      return state
  }
}
