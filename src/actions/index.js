import axios from 'axios'

export const getRegulationList = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:4000/regulations`)
      .then(({data}) => {

        dispatch({type: "RECEIVE_REGULATIONS", regulation: data})

      })
  }
}

export const getRegulation = (regulation) => {
  return (dispatch) => {

    axios
    .get(`http://localhost:4000/regulations/${regulation.id}`)
      .then(({data}) => {
        dispatch({type: "SET_CURRENT_REGULATION", regulation: data})
      })
  }
}
export const addVote = (regulation, vote) => {
  return(dispatch) => {
    axios
    .post(`http://localhost:4000/votes`)
    .then(({data}) => {
      debugger
      dispatch({type:"SUBMIT_VOTE", votes: data})
    })
  }
}
