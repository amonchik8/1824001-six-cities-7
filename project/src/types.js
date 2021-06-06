import PropTypes from 'prop-types';

export const offersQuantityType = PropTypes.number.isRequired;

export const locationsType = PropTypes.arrayOf(PropTypes.string).isRequired;

export const locationNameType = PropTypes.string.isRequired;

export const placesType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  mark: PropTypes.string,
  price: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
});
