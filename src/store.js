import { createStore, combineReducers } from 'redux';
import merge from 'lodash.merge';

function CalcReducer(originalState, { type, input }) {
  const state = merge({
    currentValue: '0',
    total: 0,
    currentOperation: null,
    restart: true
  }, originalState);

  let { currentValue, restart, currentOperation } = state;

  if (type === 'INPUT_NUMBER') {
    if (restart) {
      state.currentValue = input;
      state.restart = false;
    } else {
      state.currentValue = `${currentValue}${input}`;
    }
  }

  if (type === 'CLEAR') {
    state.currentValue = '0';
    state.restart = true;
  }

  if (type === 'CLEAR_EVERYTHING') {
    state.currentValue = '0';
    state.total = 0;
    state.currentOperation = null;
    state.restart = true;
  }

  currentValue = Number.parseInt(currentValue, 10);

  const operations = {
    DIVIDE() {
      state.total /= currentValue;
    },

    MULTIPLY() {
      state.total *= currentValue;
    },

    SUBTRACT() {
      state.total -= currentValue;
    },

    ADD() {
      state.total += currentValue;
    },

    TOTAL() {}
  };

  if (operations[type]) {
    if (currentOperation !== null) {
      operations[currentOperation]();
    } else {
      state.total = currentValue;
    }

    if (type === 'TOTAL') {
      state.currentValue = `${state.total}`;
      state.currentOperation = null;
    } else {
      state.currentOperation = type;
    }

    state.restart = true;
  }

  if (type === 'SQUARE_ROOT') {
    state.currentValue = `${Math.sqrt(currentValue)}`;
  }

  return state;
}

const store = createStore(combineReducers({ calcState: CalcReducer }));
export default store;
