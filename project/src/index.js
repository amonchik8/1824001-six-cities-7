import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';
import { OFFERS } from './mocks/offers';
import { REVIEWS } from './mocks/reviews';
import { reducer } from './store/reducer';

const Setting = {
  OFFERS,
  REVIEWS,
};

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={Setting.OFFERS} reviews={Setting.REVIEWS} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
