import axios from 'axios'

export const getRegulationList = () => {
  return (dispatch) => {
    // 👺
    axios
    // .get(`http://localhost:4000/v1/regulations/${regulation.id}`)
      .get(`http://localhost:4000/regulations`)
      .then(({data}) => {
        // 😇
        debugger
        dispatch({type: "RECEIVE_REGULATIONS", regulation: data})

      })
  }
}
