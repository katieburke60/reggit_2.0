import axios from 'axios'

export const getRegulationList = () => {

  return (dispatch) => {
    axios
      .get(`http://localhost:4000/regulations`)
      .then(({data}) => {
        debugger
        dispatch({type: "RECEIVE_REGULATIONS", regulation: data})

      })
  }
}

export const getRegulation = (regulation) => {
  debugger
  return (dispatch) => {
    axios
    .get(`http://localhost:4000/regulations/${regulation.id}`)
      .then(({data}) => {
        dispatch({type: "SET_CURRENT_REGULATION", regulation: data})
      })
  }
}
