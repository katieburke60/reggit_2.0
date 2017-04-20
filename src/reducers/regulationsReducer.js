export default (state=[], action) => {
  switch (action.type) {
    case "RECEIVE_REGULATIONS":
      return [...state, ...action.regulations]
    default:
      return state
  }
}
