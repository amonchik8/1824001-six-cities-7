import { AuthorizationStatus, SORT_VALUES } from '../const';
const { TOP_RATED_FIRST, PRICE_TO_HIGH, PRICE_TO_LOW } = SORT_VALUES;

export const sortOffers = (offersList, sortValue) => {
  switch (sortValue) {
    case PRICE_TO_LOW:
      return offersList.slice().sort((a, b) => b.price - a.price);
    case PRICE_TO_HIGH:
      return offersList.slice().sort((a, b) => a.price - b.price);
    case TOP_RATED_FIRST:
      return  offersList.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offersList;
  }
};

export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;

export const adaptToClient = (offer) => {
  const adaptedOffer = {
    ...offer,
    previewImage: offer.preview_image,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    maxAdults: offer.max_adults,
    bedrooms: offer.bedrooms,
    host: {
      ...offer.host,
      avatarUrl: offer.host.avatar_url,
      isPro: offer.host.is_pro,
    },
  };

  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.bedrooms;
  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;

  return adaptedOffer;
};

export const adaptUserInfo = (userInfo) => {
  const adaptedUserInfo = {
    ...userInfo,
    avatarUrl: userInfo.avatar_url,
    isPro: userInfo.is_pro,
  };

  delete adaptedUserInfo.token;
  delete adaptedUserInfo.avatar_url;
  delete adaptedUserInfo.is_pro;

  return adaptedUserInfo;
};

export const adaptReview = (review) => {
  const adaptedReview = {
    ...review,
    user: {
      ...review.user,
      avatarUrl: review.user.avatar_url,
      isPro: review.user.is_pro,
    },
  };

  delete adaptedReview.user.avatar_url;
  delete adaptedReview.user.is_pro;

  return adaptedReview;
};
