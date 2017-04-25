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
export const addVote = (regulation, vote) => {
  return(dispatch) => {
    axios({
      method: 'POST',
      url: `http://localhost:4000/votes`,
      dataType: "json",
      data: {
        vote: vote,
        regulation_id: regulation.id
      },
      })
    }
}
export const createComment = (regulation, comment) => {
    debugger
  return(dispatch) => {
    axios.post('http://localhost:4000/comments', { comment:comment, regulation_id: regulation.id })


    // axios
    // .get(`http://localhost:4000/regulations/comments`)
    //   .then(({data}) => {
    //     dispatch({type: "SUBMIT_COMMENT_FOR_REGULATION", regulation: data})
    //   })
  }
}
