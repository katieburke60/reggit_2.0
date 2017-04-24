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
  return (dispatch) => {
    axios
    .get(`http://localhost:4000/regulations/${regulation.id}`)
      .then(({data}) => {
        dispatch({type: "SET_CURRENT_REGULATION", regulation: data})
      })
  }
}

// export function addVote(vote, regulation){
//   return (dispatch) => {
//     axios
//       .post(`http://localhost:4000/regulations/${regulation.id}`, vote, {
//       //   headers:
//       //   ...
//       // })
//       .then(({data}) => {
//         dispatch({
//           type: "SUBMIT_VOTE",
//           vote: data
//         })
//       })
//       .catch((errors)=>{
//         console.log(errors)
//       })
//   }
// }
