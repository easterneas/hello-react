import { createStore, compose, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import reducer from './reducer.js'

// 0 - Store

export default createStore(
  // parameter 1: reducer-nya
  reducer,
  // parameter 2: enhancer
  // // di sini saya tambahkan Redux DevTools
  // // Redux DevTools ini hanya akan dijalankan ketika NODE_ENV sama dengan 'development'
  // // https://github.com/zalmoxisus/redux-devtools-extension
  // process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : null
  compose( applyMiddleware(thunk) )
)