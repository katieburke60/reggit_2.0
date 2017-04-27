export default (state=[], action) => {
  switch(action.type) {
    case 'SUBMIT_VOTE':
      return action.votes
    default:
      return state
    }
}

// function voteCounter (state=[upvotes , downvotes], action) {
  //if (action.type = 'UPVOTE') {
    //return state[0] + 1
  //elseif (action.type = 'DOWNVOTE')
    //return state[1] - 1
  //else return state
// }
// }
