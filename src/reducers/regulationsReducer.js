// dispatch({type: "FILTER_REGULATIONS", filter: "all"})
export default (state={all: [], filtered: []}, action) => {

  switch (action.type) {
    //redo so that if we JUST want to see certain subset then it gives us back all of them. Set filtered regulations back to the original full set.
    //need to run a different line

    case "RECEIVE_REGULATIONS":
      return {
        all: action.regulations,
        filtered: action.regulations,
      }
        //why use Object.assign versus splat?
    case "FILTER_REGULATIONS":
      return Object.assign({}, state, {
        filtered: state.allRegulation.filter((regulation) => regulation.category === action.filter )
      })

      // return {
      //   allRegulation: state.allRegulation,
      //   filteredRegulations: state.allRegulation.filter((regulation) => regulation.category === action.filter )
      // }
    default:
      return state
  }
}
