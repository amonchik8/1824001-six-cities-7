import { AuthorizationStatus, SORT_VALUES } from '../const';
const { TOP_RATED_FIRST, PRICE_TO_HIGH, PRICE_TO_LOW } = SORT_VALUES;

export const sortOffers = (offersList, sortValue) => {
  const sortedByPrice = offersList?.sort(
    (firstOffer, secondOffer) => secondOffer.price - firstOffer.price);
  switch (sortValue) {
    case PRICE_TO_LOW:
      return sortedByPrice;
    case PRICE_TO_HIGH:
      return sortedByPrice.reverse();
    case TOP_RATED_FIRST:
      return offersList.sort(
        (firstOffer, secondOffer) => secondOffer.rating - firstOffer.rating);
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
