import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todosReducer from './reducers/todosReducer.js';

const store = createStore(todosReducer, applyMiddleware(thunk));

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store} > 
      <Router>
        
        <App />

      </Router>
    </Provider>
  </React.StrictMode>,


  document.getElementById('root')
);

// import catsReducer from './reducers/catsReducer.js';