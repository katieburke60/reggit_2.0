export default (state={all:[]}, action) => {
  //should comments, votes, etc. go here like we did with proportion?
  switch (action.type) {
    case "SUBMIT_COMMENT_FOR_REGULATION":
      return ({
        all: action.comments
      })

    default:
      return state
  }
}
