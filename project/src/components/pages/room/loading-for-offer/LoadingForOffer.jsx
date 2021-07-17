import React from 'react';
import PropTypes from 'prop-types';
import { LoadingScreen } from '../../../common';

export function LoadingForOffer({ isLoad, children }) {
  return isLoad ? children : <LoadingScreen />;
}

LoadingForOffer.propTypes = {
  isLoad: PropTypes.bool.isRequired,
  children: PropTypes.any,
};

export default LoadingForOffer;
