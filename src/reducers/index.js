import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import RegulationsReducer from './regulationsReducer'
import CurrentRegulationReducer from './currentRegulationReducer'
import CategoriesReducer from './categoriesReducer'


export default combineReducers({
  regulations: RegulationsReducer,
  currentRegulation: CurrentRegulationReducer,
  categories: CategoriesReducer,
  router: routerReducer,
})
