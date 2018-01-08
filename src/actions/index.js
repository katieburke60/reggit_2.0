import axios from 'axios'
import { store } from '../index'

export const getRegulations = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:4000/actions`)
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
    .get(`http://localhost:4000/actions/${regulationId}`)
      .then(({data}) => {
        dispatch({type: "SET_CURRENT_REGULATION", regulation: data})
      })
  }
}
export const addVote = (regulation, vote) => {
  return(dispatch) => {
    axios
      .post('http://localhost:4000/votes', { vote: vote, regulation_id: regulation.id })
        .then(({data}) => {
            dispatch({type: 'ADD_VOTE', vote: data})
        })
    }
}
export const signin = (params) => {
  return fetch('http://localhost:4000/sessions', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      account: {
        email: params.email,
        password: params.password
      }
    }),
  }).then(function(response) {
    console.log(response)
    debugger
  }
}

// .then(({data}) => {
//   return localStorage.setItem('jwt', data.jwt)
//   return dispatch({type: 'LOGIN'})
// })
