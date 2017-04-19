import axios from 'axios'
export const getRegulation = (regulation) => {
  return (dispatch) => {
    // 👺
    axios
  .get(`http://localhost:4000/regulations/${regulation.id}`)
      .then(({data}) => {
        // 😇
        debugger
        dispatch({type: "SET_CURRENT_REGULATION", regulation: data})
      })
  }
}
