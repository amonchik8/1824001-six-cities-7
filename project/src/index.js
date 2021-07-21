import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { createAPI } from '../src/services/api';
import { redirect } from './store/middlewares/redirect';
import { requiredAuthorization } from './store/action';
import { checkAuth, fetchOfferList } from './store/api-actions';
import App from './components/app';
import {reducer} from './store/reducer';
import { AuthorizationStatus } from './const';

const api = createAPI(() =>
  store.dispatch(
    requiredAuthorization(AuthorizationStatus.NO_AUTH)));
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect)));

store.dispatch(checkAuth());
store.dispatch(fetchOfferList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
