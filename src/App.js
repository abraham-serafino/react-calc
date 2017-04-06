import React from 'react';
import { connect } from 'react-redux';
import ButtonPanel from './ButtonPanel.js';

import './App.css';

function App({ handleKeyPress, currentValue }) {
  return (
    <div onKeyUp={handleKeyPress}>
      <div className="NumberBox">
        <input type="text" readOnly="true" disabled="true" value={currentValue}/>
        &nbsp;
      </div>

      <ButtonPanel/>
    </div>
  );
}

export default connect(
  store => ({
    currentValue: store.calcState.currentValue
  })
)(App);
