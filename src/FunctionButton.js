import React from 'react';
import { connect } from 'react-redux';

import './Buttons.css';

function FunctionButton({ value, doubleWide, handleClick }) {
  const double = doubleWide ? 'WideFunction' : 'FunctionButton';

  return (
    <span className={`Button ${double}`} onClick={handleClick}>{value}</span>
  );
}

export default connect(
  store => ({
    currentValue: store.calcState.currentValue
  }),

  (dispatch, { value }) => ({
    handleClick() {
      /**
       * @warning: object keys contain magic characters
       */
      const VALUE_ACTION_MAP = {
        'C': 'CLEAR',
        'CE': 'CLEAR_EVERYTHING',
        '÷': 'DIVIDE',
        '×': 'MULTIPLY', // magic character - do not retype
        '−': 'SUBTRACT', // magic character - do not retype
        '+': 'ADD',
        '√': 'SQUARE_ROOT',
        '=': 'TOTAL'
      };

      dispatch({ type: VALUE_ACTION_MAP[value] });
    }
  })
)(FunctionButton);
