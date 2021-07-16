import React from 'react';
import PropTypes from 'prop-types';
import LoadingScreen from '../loading-screen';

function LoadingForOffer({ isLoad, children }) {
  return isLoad ? children : <LoadingScreen />;
}

LoadingForOffer.propTypes = {
  isLoad: PropTypes.bool.isRequired,
  children: PropTypes.any,
};

export default LoadingForOffer;
