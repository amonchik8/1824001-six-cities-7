import { ActionType } from '../action';

const INITIAL_CITY = 'Paris';

const initialState = {
  city: INITIAL_CITY,
};

const process = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};

export { process };
