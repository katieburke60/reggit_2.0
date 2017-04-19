import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'

import App from './App';
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

axios
// .get('http:localhost:4000/v1/regulations')
.get('http://localhost:4000/regulations')
.then(({data}) => {
 store.dispatch({type: 'RECEIVE_REGULATIONS', regulations: data})
 ReactDOM.render(
   <Provider store={store}>
     <App />
   </Provider>,
   document.getElementById('root')
 );
})
