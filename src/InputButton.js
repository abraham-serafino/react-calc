import React from 'react';
import { connect } from 'react-redux';

import './Buttons.css';

function InputButton({ value, doubleWide, handleClick }) {
  const double = doubleWide ? 'WideInput' : 'InputButton';

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
      dispatch({ type: 'INPUT_NUMBER', input: value });
    }
  })
)(InputButton);
