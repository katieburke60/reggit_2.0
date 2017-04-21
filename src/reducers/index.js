import { combineReducers } from 'redux'
import RegulationsReducer from './regulationsReducer'
import CurrentRegulationReducer from './currentRegulationReducer'

// import { routerReducer } from 'react-router-redux'


export default combineReducers({
  regulations: RegulationsReducer,
  currentRegulation: CurrentRegulationReducer,
  // router: routerReducer,
})
