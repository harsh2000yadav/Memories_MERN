import React from 'react';
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStrore, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import reducers from './reducers'

import App from './App'

const store = createStrore(reducers,compose(applyMiddleware(thunk)));

ReactDom.render(<App />, document.getElementById('root'))
