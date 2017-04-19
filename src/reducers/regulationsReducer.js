export default (state=[], action) => {
  switch (action.type) {
    case "RECEIVE_REGULATIONS":
// ...actio or acton base onarray
      return [...state, ...action.regulations]
    default:
      return state
  }
}
