import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import RegulationsReducer from './regulationsReducer'
import CurrentRegulationReducer from './currentRegulationReducer'
import CategoriesReducer from './categoriesReducer'
import { manageLogin } from './loginReducer'
import { manageErrors } from './errorsReducer'

export default combineReducers({
  regulations: RegulationsReducer,
  currentRegulation: CurrentRegulationReducer,
  categories: CategoriesReducer,
  login: manageLogin,
  errors: manageErrors,

  router: routerReducer,
})
