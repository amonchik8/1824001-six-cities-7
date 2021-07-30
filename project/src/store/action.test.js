import {
  ActionType,
  changeCity,
  loadOffers,
  loadOffer,
  loadOffersNearby,
  loadReviews,
  requiredAuthorization,
  loadUserInfo,
  signOut,
  redirectToRoute,
  loadFavorites,
  updateFavorites
} from './action';

describe('Actions', () => {
  it('action creator for change active city returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: 'Paris',
    };

    expect(changeCity('Paris')).toEqual(expectedAction);
  });

  it('action creator for loading offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: { offers: 'offers' },
    };

    expect(loadOffers({ offers: 'offers' })).toEqual(expectedAction);
  });

  it('action creator for loading offer returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFER,
      payload: { offer: 'offer' },
    };

    expect(loadOffer({ offer: 'offer' })).toEqual(expectedAction);
  });

  it('action creator for loading offers nearby returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: {
        offers: 'offers',
      },
    };

    expect(
      loadOffersNearby({
        offers: 'offers',
      })).toEqual(expectedAction);
  });

  it('action creator for loading reviews returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: {
        reviews: 'reviews',
      },
    };

    expect(
      loadReviews({
        reviews: 'reviews',
      })).toEqual(expectedAction);
  });

  it('action creator for requiring authorization status returns correct action', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: 'AUTH',
    };

    expect(requiredAuthorization('AUTH')).toEqual(expectedAction);
  });

  it('action creator for load user info returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_USER_INFO,
      payload: {
        user: 'info',
      },
    };

    expect(
      loadUserInfo({
        user: 'info',
      })).toEqual(expectedAction);
  });

  it('action creator for logout returns correct action', () => {
    const expectedAction = {
      type: ActionType.SIGNOUT,
    };

    expect(signOut()).toEqual(expectedAction);
  });

  it('action creator for redirecting returns correct action', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: '/login',
    };

    expect(redirectToRoute('/login')).toEqual(expectedAction);
  });

  it('action creator for loading favorites returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: { offer: 'offer' },
    };

    expect(loadFavorites({ offer: 'offer' })).toEqual(expectedAction);
  });

  it('action creator for updating favorites returns correct action', () => {
    const expectedAction = {
      type: ActionType.UPDATE_FAVORITES,
      payload: { offer: 'offer' },
    };

    expect(updateFavorites({ offer: 'offer' })).toEqual(expectedAction);
  });
});
