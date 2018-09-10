import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import PromiseMiddleware from  'redux-promise'
//import routes
import Routes from './routes/routes'
//import reducers
import reducers from './reducers'
const createStoreWithMiddleware = applyMiddleware(PromiseMiddleware)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);

