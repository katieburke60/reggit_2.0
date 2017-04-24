import axios from 'axios'

export const getRegulations = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:4000/regulations`)
      .then(({data}) => {
        dispatch({type: "RECEIVE_REGULATIONS", regulations: data})

      })
  }
}

export const getCategories = () => {
  return (dispatch) => {
    axios
    .get('http://localhost:4000/categories')
    .then(({data}) => {
      dispatch({type: 'RECEIVE_CATEGORIES', categories: data})
   })
  }
}

export const getRegulation = (regulationId) => {
  return (dispatch) => {
    axios
    .get(`http://localhost:4000/regulations/${regulationId}`)
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
