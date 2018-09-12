import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'
import ButtonGroup from './components/ButtonGroup';
import Button from './components/Button';
import Profile from './components/Profile';

import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers'
import MainContainer from './containers/Main'

const middleware = [
  thunk,
  promise(),
]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware)
))

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <MainContainer />
      </Provider>
    )
  }
}

export default App
