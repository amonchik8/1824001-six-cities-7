import { ActionType } from './action';
import { CITIES, AuthorizationStatus } from '../const';

const initialState = {
  city: CITIES[1].name,
  offers: [],
  offersNearby: [],
  reviews: [],
  user: {},
  authorizationStatus: AuthorizationStatus.UNKNOW,
  isOffersLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY: {
      return {
        ...state,
        city: action.payload,
      };
    }
    case ActionType.LOAD_OFFERS: {
      return {
        ...state,
        offers: action.payload,
        isOffersLoaded: true,
      };
    }
    case ActionType.LOAD_OFFERS_NEARBY:
      return {
        ...state,
        offersNearby: action.payload,
      };
    case ActionType.SET_IS_LOAD_OFFERS:
      return {
        ...state,
        isDataLoaded: action.payload,
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offers: [action.payload],
        isDataLoaded: true,
      };

    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.status,
      };
    case ActionType.LOAD_USER_INFO:
      return {
        ...state,
        user: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export { reducer };
