import { ActionCreator } from './action';
import { AuthorizationStatus, APIRoute, AppRoute } from '../const';
import { adaptToClient, adaptUserInfo, adaptReview } from '../utils/utils';

export const fetchOfferList = () => (dispatch, _getState, api) =>
  api
    .get(APIRoute.OFFERS)
    .then(({ data }) =>
      dispatch(ActionCreator.loadOffers(data.map(adaptToClient))));

export const fetchOfferNearbyList = (id) => (dispatch, _getState, api) =>
  api
    .get(`${APIRoute.OFFERS}/${id}${APIRoute.OFFERS_NEARBY}`)
    .then(({ data }) => {
      dispatch(
        ActionCreator.loadOffersNearby(data.map(adaptToClient)));
    });

export const fetchReviewList = (id) => (dispatch, _getState, api) =>
  api.get(`${APIRoute.REVIEWS}/${id}`).then(({ data }) => {
    dispatch(ActionCreator.loadReviews(data.map((item) => adaptReview(item))));
  });

export const checkAuth = () => (dispatch, _getState, api) =>
  api
    .get(APIRoute.LOGIN)
    .then(() =>
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {});

export const login =
  ({ login: email, password }) =>
    (dispatch, _getState, api) =>
      api
        .post(APIRoute.LOGIN, { email, password })
        .then(({ data }) => {
          localStorage.setItem('token', data.token);
          dispatch(ActionCreator.loadUserInfo(adaptUserInfo(data)));
        })
        .then(() =>
          dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
        .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)));

export const logout = () => (dispatch, _getState, api) =>
  api
    .delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()));

export const sendReview =
  ({ comment, rating, id }) =>
    (dispatch, _getState, api) =>
      api.
        post(`${APIRoute.REVIEWS}/${id}`, { comment, rating })
        .then(({data}) => {
          dispatch(ActionCreator.loadReviews(data.map(adaptReview)));
        });
