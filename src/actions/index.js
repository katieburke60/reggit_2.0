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
export const addVote = (regulationId, vote) => {

  return(dispatch) => {

    axios({
      method: 'POST',
      url:'http://localhost:4000/votes',
      data:{ vote: vote, regulation_id: regulationId },
    })

    .then(({data}) => {
      dispatch({type:'SUBMIT_VOTE'},
      {vote: vote, regulation_id: regulationId})
    })
    }

}

export const addComment = (regulation, comment) => {
  return(dispatch) => {
    axios
      .post('http://localhost:4000/comments', { comment: comment, regulation_id: regulation.id })
      .then(({data}) => {
        dispatch({type: "SET_CURRENT_REGULATION", regulation: data.regulation})
      })

  }
}
