import React from 'react';
import Main from '../main';
import PropTypes from 'prop-types';

function App({places, quantityOffers}) {
  return (
    <div>
      <Main places={places} quantityOffers={quantityOffers} />
    </div>
  );
}
App.propTypes = {
  places: PropTypes.array.isRequired,
  quantityOffers: PropTypes.number.isRequired,
};

export default App;
