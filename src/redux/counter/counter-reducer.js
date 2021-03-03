import { combineReducers } from 'redux';
// import * as actionTypes from './counter-types';
import { increment, decrement } from './counter-actions';
import { createReducer } from '@reduxjs/toolkit';

// const valueReducer = (state = 10, { type, payload }) => {
//   switch (type) {
//     case actionTypes.INCREMENT:
//       return state + payload;

//     case actionTypes.DECREMENT:
//       return state - payload;

//     default:
//       return state;
//   }
// };

const valueReducer = createReducer(10, {
  [increment]: (state, { payload }) => state + payload,
  [decrement]: (state, { payload }) => state - payload,
});

const stepReducer = (state = 5, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
