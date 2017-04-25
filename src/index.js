/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import './index.css'

import UpAndDownvote from './components/currentRegulation/votes/upAndDownvote'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import SelectedRegulation from './components/regulations/SelectedRegulation'
import createHistory from 'history/createBrowserHistory'
import {
  
  ConnectedRouter as Router,
  routerMiddleware
} from 'react-router-redux'
import {
  Route,
  Link
} from 'react-router-dom'

import App from './App';
import rootReducer from './reducers'

const history = createHistory()
const rMiddleware = routerMiddleware(history)

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, rMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
const Home = () => {
  return (
  <div>
    <h1>Welcome to Reggit. Your source for what the government is working on.</h1>
    <Link to="/regulations">See all regulations</Link>
  </div>
  )
}

ReactDOM.render(
 <Provider store={store}>
   <Router history={history}>
     <div>
       <Route exact path='/' component={Home} />
       <Route exact path='/regulations' component={App} />
       <Route exact path='/regulations/:regulationId' component={SelectedRegulation} />
    </div>
   </Router>
 </Provider>,
document.getElementById('root')
)
