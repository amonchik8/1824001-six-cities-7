import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const Setting = {
  OFFERS_QUANTITY: 312,
  PLACES: [
    {
      name: 'Beautiful & luxurious apartment at great location',
      mark: 'Premium',
      price: 120,
      duration: 'night',
      type: 'Apartment',
      photo: '01',
    },
    {
      name: 'Wood and stone place',
      price: 80,
      duration: 'night',
      type: 'Private room',
      photo: '04',
    },
    {
      name: 'Canal View Prinsengracht',
      price: 132,
      duration: 'night',
      type: 'Apartment',
      photo: '02',
    },
    {
      name: 'Nice, cozy, warm big bed apartament',
      mark: 'Premium',
      price: 180,
      duration: 'night',
      type: 'Apartment',
      photo: '03',
    },
    {
      name: 'Wood place',
      price: 80,
      duration: 'night',
      type: 'Private room',
      photo: '04',
    },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <App places={Setting.PLACES} offersQuantity={Setting.OFFERS_QUANTITY} />
  </React.StrictMode>,
  document.getElementById('root'),
);
