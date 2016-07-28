import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/app'
import UserListContainer from './components/userlist/userlistcontainer.js'
import {IndexRoute, Route, Router, browserHistory} from 'react-router';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './components/reducer/userlist-reducer.js'

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
    (<Provider store={store}>
        <Router history={browserHistory}>
        	<Route path="/" component={App}>
            	<IndexRoute component={UserListContainer} />
        	</Route>
    	</Router>
    </Provider>)
    , document.getElementById('root')
)
