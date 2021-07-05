import { ActionType } from './action';
import { CITIES, AuthorizationStatus } from '../const';
import { adaptToClient } from '../utils/utils';

const initialState = {
  city: CITIES[1].name,
  offers: [],
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
        offers: adaptToClient(action.payload),
        isOffersLoaded: true,
      };
    }
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.status,
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
