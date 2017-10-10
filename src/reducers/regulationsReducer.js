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
    case "FILTER_DEADLINE":
      return {
        all: state.all,
        filtered: state.all.filter((regulation) => regulation.days_left < 30 && regulation.days_left > 0)
      }
    case "FILTER_NEWEST":
      return {
        all: state.all,
        filtered: state.all.filter((regulation) => Math.ceil(Math.abs(new Date() - new Date(regulation.publication_date)) / (1000 * 3600 * 24)) < 5 )
      }
    case 'FILTER_ACTION_FOLLOWING':
      return {
        all: state.all,
        filtered: action.citizen.actions
      }
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
