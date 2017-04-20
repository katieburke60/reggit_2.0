export default (state=[], action) => {
  //is there a way to include everything within every default versus using combined reducers?
  switch (action.type) {
    case "RECEIVE_REGULATIONS":
      return action.regulations
        //why use Object.assign versus splat?
    default:
      return state
  }
}

// {[...state, ...action.regulations]}
