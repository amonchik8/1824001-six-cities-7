import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';
import { OFFERS } from './mocks/offers';
import { REVIEWS } from './mocks/reviews';
import { reducer } from './store/reducer';

const Setting = {
  OFFERS_QUANTITY: 312,
  OFFERS,
  REVIEWS,
};

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={Setting.OFFERS}
        offersQuantity={Setting.OFFERS_QUANTITY}
        reviews={Setting.REVIEWS}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
