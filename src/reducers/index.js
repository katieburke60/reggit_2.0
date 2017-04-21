import { combineReducers } from 'redux'
import RegulationsReducer from './regulationsReducer'
import CurrentRegulationReducer from './currentRegulationReducer'
import CategoriesReducer from './categoriesReducer'

// import { routerReducer } from 'react-router-redux'


export default combineReducers({
  regulations: RegulationsReducer,
  currentRegulation: CurrentRegulationReducer,
  categories: CategoriesReducer
  // router: routerReducer,
})
