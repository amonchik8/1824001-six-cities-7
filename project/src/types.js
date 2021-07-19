import PropTypes from 'prop-types';

export const offersType = PropTypes.shape({
  title: PropTypes.string,
  isPremium: PropTypes.bool,
  price: PropTypes.number,
  type: PropTypes.string,
  previewImage: PropTypes.string,
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
