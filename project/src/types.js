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

export const reviewsType = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  data: PropTypes.bool,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string.isRequired,
  }),
});
