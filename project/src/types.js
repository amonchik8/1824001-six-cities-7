import PropTypes from 'prop-types';

export const offersQuantityType = PropTypes.number.isRequired;

export const locationsType = PropTypes.arrayOf(PropTypes.string).isRequired;

export const locationNameType = PropTypes.string.isRequired;

export const hotelsType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  isPremium: PropTypes.bool,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
});
