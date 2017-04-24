export default (state={all: [], filtered: []}, action) => {
  switch (action.type) {
    case "RECEIVE_REGULATIONS":
      return {
        all: action.regulations,
        filtered: action.regulations,
      }
    case "FILTER_CATEGORY":
      return {
        all: state.all,
        filtered: state.all.filter((regulation) => regulation.category_name === action.category )
      }
    case "CLEAR_FILTER": {
      return {
        all: state.all,
        filtered: state.all
      }
    }
    // case "FILTER_VOTES":
    //   const upper_limit = 30
    //   return {
    //     all: state.all,
    //     //TODO: Think I need to map over votes or something
    //     filtered: state.all.filter((regulation) => regulation.votes["up"].count > upper_limit)
    //   }

    default:
      return state
  }
}
