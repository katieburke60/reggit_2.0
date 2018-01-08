import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import RegulationsReducer from './regulationsReducer'
import CurrentRegulationReducer from './currentRegulationReducer'
import CategoriesReducer from './categoriesReducer'
import SessionsReducer from './sessionsReducer'

export default combineReducers({
  regulations: RegulationsReducer,
  currentRegulation: CurrentRegulationReducer,
  categories: CategoriesReducer,
  sessions: SessionsReducer,
  router: routerReducer,
})
