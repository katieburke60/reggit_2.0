import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import RegulationsReducer from './regulationsReducer'
import CurrentRegulationReducer from './currentRegulationReducer'
import VotesReducer from './votesReducer'
import CategoriesReducer from './categoriesReducer'
import VotesReducer from './votesReducer'

export default combineReducers({
  regulations: RegulationsReducer,
  currentRegulation: CurrentRegulationReducer,
<<<<<<< HEAD
  categories: CategoriesReducer,
  votes: VotesReducer,
  router: routerReducer,
=======
  votes: VotesReducer,
  categories: CategoriesReducer
  // router: routerReducer,
>>>>>>> ac3828390d703b85d2378314e7f59046facb39e2
})
