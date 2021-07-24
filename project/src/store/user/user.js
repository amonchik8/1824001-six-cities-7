import { createReducer } from '@reduxjs/toolkit';
import { requiredAuthorization, loadUserInfo, logout } from '../action';
import { AuthorizationStatus } from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: {},
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requiredAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadUserInfo, (state, action) => {
      state.user = action.payload;
    })
    .addCase(logout, (state) => {
      state.user = {};
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    });
});

export { user };
