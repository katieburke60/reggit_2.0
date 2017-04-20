import axios from 'axios'

export const getRegulation = (regulation) => {
  return (dispatch) => {
    // 👺
  axios
    .get(`http://localhost:4000/regulations/${regulation.id}`)
      .then(({data}) => {
        // 😇
        dispatch({type: "SET_CURRENT_REGULATION", regulation: data})
        dispatch({type: "ADD_VOTE", vote: data})
        dispatch({type: :"DELETE_VOTE", vote: data})
      })
  }
}
