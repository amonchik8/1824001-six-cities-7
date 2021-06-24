import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { HOTELS } from './mocks/offers';
import { LOCATIONS } from './mocks/locations';
import { REVIEWS } from './mocks/reviews';

const Setting = {
  OFFERS_QUANTITY: 312,
  HOTELS,
  LOCATIONS,
  REVIEWS,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      hotels={Setting.HOTELS}
      offersQuantity={Setting.OFFERS_QUANTITY}
      locations={Setting.LOCATIONS}
      reviews={Setting.REVIEWS}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
