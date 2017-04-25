export default (state=[], action) => {
  switch(action.type) {
    case 'SUBMIT_VOTE':
      return action.votes
    default:
      return state
    }
}
