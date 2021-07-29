import { user } from './user';
import { ActionType } from '../action';
import { AuthorizationStatus } from '../../const';

describe('Reducer: user', () => {
  it('without additional parametres return initial state', () => {
    expect(user(undefined, {})).toEqual({
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      user: {
        avatarUrl: '',
        email: '',
        id: null,
        isPro: false,
        name: '',
      },
    });
  });

  it('update authorization status by action payload', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
    };

    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(state, requiredAuthorizationAction)).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });
  });

  it('should set user by loaded data', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      user: {
        avatarUrl: '',
        email: '',
        id: null,
        isPro: false,
        name: '',
      },
    };

    const userInfo = {
      avatarUrl: '/img/test.png',
      email: 'test@mail.test',
      id: 1,
      isPro: true,
      name: 'Test',
    };

    const setUserName = {
      type: ActionType.LOAD_USER_INFO,
      payload: userInfo,
    };

    expect(user(state, setUserName))
      .toEqual({
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        user: {
          avatarUrl: '/img/test.png',
          email: 'test@mail.test',
          id: 1,
          isPro: true,
          name: 'Test',
        },
      });
  });

  it('should signout app', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.AUTH,
      user: {
        avatarUrl: '',
        email: '',
        id: null,
        isPro: false,
        name: '',
      },
    };
    const signout = {
      type: ActionType.SIGNOUT,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(user(state, signout)).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: {
        avatarUrl: '',
        email: '',
        id: null,
        isPro: false,
        name: '',
      },
    });
  });
});
