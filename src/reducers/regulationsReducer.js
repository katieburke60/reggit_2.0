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
    // case 'FILTER_POSTED_DATE':
    //   return {
    //     all: state.all,
    //     filtered: state.all.filter((regulation) => {
    //       let today = new Date()
    //       var diffDays = Math.round(Math.abs((today.getTime() - regulation.publication_date.getTime())/(oneDay)))
    //       diffDays >
    //     })
    //   }
    case "CLEAR_FILTER": {
      return {
        all: state.all,
        filtered: state.all
      }
    }

    default:
      return state
  }
}
