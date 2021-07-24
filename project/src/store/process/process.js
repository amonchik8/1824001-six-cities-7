import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from '../action';

const INITIAL_CITY = 'Paris';

const initialState = {
  city: INITIAL_CITY,
};

const process = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
  });
});

export { process };
