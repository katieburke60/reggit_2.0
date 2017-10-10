
export default (state={all: [], filtered: []}, action) => {
  switch (action.type) {
      case "RECEIVE_CATEGORIES":
        return{
          all: action.categories,
          filtered: action.categories,
        }
      case "SELECT_CATEGORY":
        return{
          all: state.all,
          filtered: state.all.filter((category) => category === action.category),
        }
      default:
        return state
  }
}
