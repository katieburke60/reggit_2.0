import {combineReducers} from 'redux'
// import { routerReducer } from 'react-router-redux'


import RegulationsReducer from './regulationsReducer'
import CurrentRegulationReducer from './currentRegulationReducer'


export default combineReducers({
  regulations: RegulationsReducer,
  currentRegulation: CurrentRegulationReducer,
  // router: routerReducer,
})
