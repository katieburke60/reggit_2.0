import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './App';
import rootReducer from './reducers'
import UpAndDownvote from './components/currentRegulation/votes/UpAndDownvote'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

function getRegulations (){
  return (dispatch) => {
    axios
    .get('http://localhost:4000/regulations')
    .then(({data}) => {
      dispatch({type: 'RECEIVE_REGULATIONS', regulations: data})
    })
  }
}
function getCategories (){
  return (dispatch) => {
    axios
      .get('http://localhost:4000/categories')
      .then(({data}) => {
       dispatch({type: 'RECEIVE CATEGORIES', categories: data})
     })
   }
}

store.dispatch(getRegulations())
store.dispatch(getCategories())

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
 document.getElementById('root')
);
