import { ActionType } from './action';
import { CITIES } from '../const';
import { OFFERS } from '../mocks/offers';

const initialState = {
  city: CITIES[1].name,
  offers: OFFERS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY: {
      return {
        ...state,
        city: action.payload,
      };
    }
    default:
      return state;
  }
};

export { reducer };
