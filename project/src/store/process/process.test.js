import { process, INITIAL_CITY } from './process';
import { ActionType } from '../action';

describe('Reducer: process', () => {
  it('update city by action payload', () => {
    const state = {
      city: INITIAL_CITY,
    };

    const changeCity = {
      type: ActionType.CHANGE_CITY,
      payload: 'Hamburg',
    };

    expect(process(state, changeCity)).toEqual({
      city: 'Hamburg',
    });
  });
});
