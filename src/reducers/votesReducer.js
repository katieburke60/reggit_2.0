export default (state={all:[]}, action) => {
  switch(action.type) {
    case 'SUBMIT_VOTE':
      return ({
        all: action.votes
      })
    default:
      return state
    }
}
