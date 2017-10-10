import axios from 'axios'
import { store } from '../index'

export const getRegulations = () => {
  return (dispatch) => {
    axios
      .get(
        "http://localhost:4000/actions",
        {headers: {
          authorization: `Bearer ${localStorage.getItem("jwt")}`
        }}
      )
      .then(({data}) => {
        dispatch({type: "RECEIVE_REGULATIONS", regulations: data})
      })
  }
}

export const getCategories = () => {
  return (dispatch) => {
    axios
    .get('http://localhost:4000/categories',
      {headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`
      }}
    )
    .then(({data}) => {
      dispatch({type: 'RECEIVE_CATEGORIES', categories: data})
   })
  }
}
export const getRegulation = (regulationId) => {
  return (dispatch) => {
    axios
    .get(`http://localhost:4000/actions/${regulationId}`, { headers: {authorization: `Bearer ${localStorage.getItem("jwt")}`} })
      .then(({data}) => {
        dispatch({type: "SET_CURRENT_REGULATION", regulation: data})
      })
  }
}

export const getAllRegs = () => {
  return{
    type: "CLEAR_FILTER"
  }
}

export const getDeadlineSoonRegs = () => {
  return{
    type: "FILTER_DEADLINE"
  }
}
export const getNewlyPosted = () => {
  return{
    type: "FILTER_NEWEST"
  }
}

export const getAccountRegs = () => {
  return(dispatch) => {
    axios
      .get('http://localhost:4000/citizens/', { headers: {authorization: `Bearer ${localStorage.getItem("jwt")}`} })
        .then(({data}) => {
          console.log(data)
          dispatch({type: "FILTER_ACTION_FOLLOWING", citizen: data})
        })
    }
  }

export const addVote = (regulation, vote) => {
  return(dispatch) => {
    axios
      .post('http://localhost:4000/votes', { vote: vote, regulation_id: regulation.id }, { headers: {authorization: `Bearer ${localStorage.getItem("jwt")}`} })
        .then(({data}) => {
            dispatch({type: 'ADD_VOTE', vote: data})
        })
    }
}

export const actionFollow = (regulation) => {
  return(dispatch) => {
    axios
      .post(`http://localhost:4000/actions/${regulation.id}/action_follow`, { action_id: regulation.id }, { headers: {authorization: `Bearer ${localStorage.getItem("jwt")}`} })
    }
}
export const actionUnfollow = (regulation) => {
  return(dispatch) => {
    axios
      .post(`http://localhost:4000/actions/${regulation.id}/action_follow/cancel`, { action_id: regulation.id }, { headers: {authorization: `Bearer ${localStorage.getItem("jwt")}`} })
    }
}

export const login = (params) => {
  return(dispatch) => {
    axios
      .post('http://localhost:4000/sessions', {account: params})
      .then((response) => {
        localStorage.setItem("jwt", response.data.jwt)
        dispatch({type: 'LOGIN', payload: response.data.jwt})
        window.location = 'http://localhost:3000'
      })
      .catch((errors) => {
        dispatch({type: 'ADD_ERROR', payload: errors.response.data.error})
      setTimeout(()=>{dispatch({
        type: "ADD_ERROR",
        payload: ""
      })}, 2000)
    })
  }
}

export const registration = (params) => {
  return(dispatch) => {
    axios
      .post('http://localhost:4000/registrations', {account: params})
      .then((response) => {
        localStorage.setItem('jwt', response.data.jwt)
        dispatch({
          type: 'REGISTER',
          payload: response.data.jwt
        })
        window.location = 'http://localhost:3000'
      })
      .catch((errors) => {
        let buildError
        if(!!errors.response.data.errors.email){
          buildError = "Email" + errors.response.data.errors.email
        }
        dispatch({
          type: 'ADD_ERROR',
          payload: buildError
        })
      })
    }
  }

  export const logout = () => {
    localStorage.removeItem("current user")
    return{
      type: "LOGOUT"
    }
    window.location = 'http://localhost:3000'
}

  // setTimeout(()=>{dispatch({
  //   type: "ADD_ERROR",
  //   payload: ""
  // })}, 2000)

//REST CLIENT CHECK
      // RestClient.get('http://localhost:4000/sessions', :Authorization => 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjoxfQ.qZM6QjMoD0Sn_LQgXGzWh0V04V182dDr7AlN-w9WfTg')
