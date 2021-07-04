import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { ActionCreator } from './store/action';
import { checkAuth, fetchOfferList } from './store/api-actions';
import { createAPI } from '../src/services/api';
import App from './components/app';
import { REVIEWS } from './mocks/reviews';
import { reducer } from './store/reducer';
import {AuthorizationStatus} from './const';

const Setting = {
  REVIEWS,
};

const api = createAPI(() =>
  store.dispatch(
    ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH),
  ),
);
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
);

store.dispatch(checkAuth());
store.dispatch(fetchOfferList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={Setting.REVIEWS} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
