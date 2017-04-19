import axios from 'axios'
export const getRegulation = (regulation) => {
  return (dispatch) => {
    // 👺
    axios
    // .get(`http://localhost:4000/v1/regulations/${regulation.id}`)
      .get(`http://localhost:4000/regulations`)
      .then(({data}) => {
        // 😇
        debugger
        dispatch({type: "SET_CURRENT_REGULATION", regulation: data})
      })
  }
}
