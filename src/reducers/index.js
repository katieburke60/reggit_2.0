import {combineReducers} from 'redux'

import RegulationsReducer from './regulationsReducer'
export default combineReducers({
  regulations: RegulationsReducer,
})
// import CurrentRegulationReducer from './currentRegulationReducer'
//
// export default combineReducers({
//   regulations: RegulationsReducer,
//   currentRegulation: CurrentRegulationReducer
// })
