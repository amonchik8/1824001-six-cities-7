import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const Setting = {
  PLACES_QUANTITY: 300,
};


ReactDOM.render(
  <React.StrictMode>
    <App placesQuantity={Setting.PLACES_QUANTITY} />
  </React.StrictMode>,
  document.getElementById('root'));
