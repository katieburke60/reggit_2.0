/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './App';
import rootReducer from './reducers'
import './index.css'
import UpAndDownvote from './components/currentRegulation/votes/upAndDownvote'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
function getCategories (){
  return (dispatch) => {
    axios
    .get('http://localhost:4000/categories')
    .then(({data}) => {
      dispatch({type: 'RECEIVE_CATEGORIES', categories: data})
   })
  }
}

function getRegulations (){
  return (dispatch) => {
    axios
    .get('http://localhost:4000/regulations')
    .then(({data}) => {
      dispatch({type: 'RECEIVE_REGULATIONS', regulations: data})
    })
  }
}

store.dispatch(getCategories())
store.dispatch(getRegulations())

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
 document.getElementById('root')
);
