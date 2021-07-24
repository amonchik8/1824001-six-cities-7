import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../src/services/api';
import { redirect } from './store/middlewares/redirect';
import { requiredAuthorization } from './store/action';
import { checkAuth, fetchOfferList } from './store/api-actions';
import App from './components/app';
import rootReducer from './store/root-reducer';
import { AuthorizationStatus } from './const';

const api = createAPI(() =>
  store.dispatch(
    requiredAuthorization(AuthorizationStatus.NO_AUTH)));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());
store.dispatch(fetchOfferList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
