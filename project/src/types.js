import PropTypes from 'prop-types';

export const placesType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  mark: PropTypes.string,
  price: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
});
