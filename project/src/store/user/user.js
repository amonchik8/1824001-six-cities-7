import { createReducer } from '@reduxjs/toolkit';
import { requiredAuthorization, loadUserInfo, signOut } from '../action';
import { AuthorizationStatus } from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: {
    avatarUrl: '',
    email: '',
    id: null,
    isPro: false,
    name: '',
  },
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requiredAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadUserInfo, (state, action) => {
      state.user = {
        avatarUrl: action.payload.avatarUrl,
        email: action.payload.email,
        id: action.payload.id,
        isPro: action.payload.isPro,
        name: action.payload.name,
      };
    })
    .addCase(signOut, (state, action) => {
      state.user = {
        avatarUrl: '',
        email: '',
        id: null,
        isPro: false,
        name: '',
      };
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    });
});

export { user };
