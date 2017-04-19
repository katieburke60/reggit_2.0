// Need to change porportions [] to correct

export default (state={source: "Select a Regulation", proportions:[]}, action) => {
  switch (action.type) {
    case "SET_CURRENT_REGULATION":
      return action.regulation
    default:
      return state
  }
}
