import React from 'react'
import ReactDom from 'react-dom'
import App from './components/app'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import combineReducers from './reducers'
ReactDom.render(
<Provider store={createStore(combineReducers)}>
<App />
</Provider>,
    document.querySelector('#root'))