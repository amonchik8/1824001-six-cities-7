import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { HOTELS } from './mocks/offers';
import { LOCATIONS } from './mocks/locations';

const Setting = {
  OFFERS_QUANTITY: 312,
  HOTELS,
  LOCATIONS,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      hotels={Setting.HOTELS}
      offersQuantity={Setting.OFFERS_QUANTITY}
      locations={Setting.LOCATIONS}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
