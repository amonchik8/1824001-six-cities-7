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

const getChangedCase = (data) => {
  for (const key in data) {
    if (typeof data[key] !== 'object' && data[key] !== null) {
      const newKey = key.replace(/_\w/, (match, offset, input) =>
        input[offset + 1].toUpperCase(),
      );
      if (key !== newKey) {
        Object.defineProperty(
          data,
          newKey,
          Object.getOwnPropertyDescriptor(data, key),
        );
        delete data[key];
      }
    } else {
      getChangedCase(data[key]);
    }
  }
  return data;
};

export const adaptToClient = (data) =>
  getChangedCase(JSON.parse(JSON.stringify(data)));
