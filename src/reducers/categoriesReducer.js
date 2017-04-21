export default (state=[], action) => {
  switch (action.type) {
      case "RECEIVE_CATEGORIES":
        return action.categories
        return [...state, ...action.categories]
      default:
        return state
  }
}
