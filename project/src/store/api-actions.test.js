import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../services/api';
import { ActionType } from './action';
import {
  fetchOffer,
  fetchOfferList,
  fetchOfferNearbyList,
  fetchReviewList,
  checkAuth,
  login,
  logout,
  fetchFavoriteList,
  sendFavoriteOffer
} from './api-actions';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { adaptToClient, adaptUserInfo, adaptReview } from '../utils/utils';

const mockOffer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: [
    'Heating',
    'Kitchen',
    'Cable TV',
    'Washing machine',
    'Coffee machine',
    'Dishwasher',
  ],
  host: {
    avatarUrl: 'img/1.png',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/1.png', 'img/2.png'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/1.png',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
};

const mockReview = {
  comment:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: 1,
  rating: 4,
  user: {
    avatarUrl: 'img/1.jpg',
    id: 4,
    isPro: false,
    name: 'Max',
  },
};

const fakeUser = {
  avatarUrl: 'img/1.png',
  email: 'Oliver.conner@gmail.com',
  id: 1,
  isPro: false,
  name: 'Oliver.conner',
  token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
};

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOfferList();

    apiMock.onGet(APIRoute.OFFERS).reply(200, [mockOffer]);

    return offersLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_OFFERS,
        payload: [adaptToClient(mockOffer)],
      });
    });
  });

  it('should make a correct API call to GET /hotels/:id/nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 1;
    const offersNearbyLoader = fetchOfferNearbyList(offerId);

    apiMock
      .onGet(`${APIRoute.OFFERS}/${offerId}/nearby`)
      .reply(200, [mockOffer]);

    return offersNearbyLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_OFFERS_NEARBY,
        payload: [adaptToClient(mockOffer)],
      });
    });
  });

  it('should make a correct API call to GET /hotels/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 1;
    const offerLoader = fetchOffer(offerId);

    apiMock.onGet(`${APIRoute.OFFERS}/${offerId}`).reply(200, mockOffer);

    return offerLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_OFFER,
        payload: adaptToClient(mockOffer),
      });
    });
  });

  it('should make a correct API call to GET /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 1;
    const reviewsLoader = fetchReviewList(offerId);

    apiMock.onGet(`${APIRoute.REVIEWS}/${offerId}`).reply(200, [mockReview]);

    return reviewsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_REVIEWS,
        payload: [adaptReview(mockReview)],
      });
    });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchFavoriteList();

    apiMock.onGet(APIRoute.FAVORITES).reply(200, [mockOffer]);

    return offersLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FAVORITES,
        payload: [adaptToClient(mockOffer)],
      });
    });
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock.onGet(APIRoute.LOGIN).reply(200, [{ fake: true }]);

    return checkAuthLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_USER_INFO,
        payload: adaptUserInfo([{ fake: true }]),
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
    });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginLoader = login({ login: fakeUser.email, password: '123456' });

    apiMock.onPost(APIRoute.LOGIN).reply(200, fakeUser);

    return loginLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_USER_INFO,
        payload: adaptUserInfo(fakeUser),
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.REDIRECT_TO_ROUTE,
        payload: AppRoute.MAIN,
      });
    });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock.onDelete(APIRoute.LOGOUT).reply(204, [{ fake: true }]);

    return logoutLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SIGNOUT,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.REDIRECT_TO_ROUTE,
        payload: AppRoute.MAIN,
      });
    });
  });

  it('should make a correct API call to POST /favorite/:id/:status', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 1;
    const status = 0;
    const favoriteSender = sendFavoriteOffer(offerId, status);

    apiMock
      .onPost(`${APIRoute.FAVORITES}/${offerId}/${status}`)
      .reply(200, mockOffer);

    return favoriteSender(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.UPDATE_FAVORITES,
        payload: adaptToClient(mockOffer),
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.LOAD_OFFER,
        payload: adaptToClient(mockOffer),
      });
    });
  });
});
