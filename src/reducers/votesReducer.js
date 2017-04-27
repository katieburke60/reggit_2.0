export default (state=[], action) => {

  switch(action.type) {
    case 'SUBMIT_VOTE':
      return action.vote
    case 'UPDATE_VOTE_COUNT':
      return action.vote
    default:
      return state
    }

}
