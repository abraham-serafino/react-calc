import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.js';
import store from './store.js';

const isNumeric = value => !isNaN(value);

window.addEventListener('keyup', event => {
  const { key, keyCode } = event;

  const KEY_ACTION_MAP = {
    8: 'CLEAR',
    10: 'MULTIPLY',
    13: 'TOTAL',
    46: 'CLEAR_EVERYTHING',
    107: 'ADD',
    109: 'SUBTRACT',
    111: 'DIVIDE',
    187: 'TOTAL',
    191: 'DIVIDE'
  };

  if (isNumeric(key)) {
    store.dispatch({ type: 'INPUT_NUMBER', input: key });
  } else if (KEY_ACTION_MAP[keyCode]) {
    store.dispatch({ type: KEY_ACTION_MAP[keyCode] });
  }
});

ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('root')
);
