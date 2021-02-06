import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

import App from './App';
import './index.css';
import { Provider } from 'react-redux';

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById('root');

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
// done
//2. Create a store that includes thunk middleware support.
// done
//3. Wrap the App component in a react-redux Provider element.
// done
