export const manageErrors = (state={}, action) => {
  switch (action.type) {
    case "ADD_ERROR":
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}
