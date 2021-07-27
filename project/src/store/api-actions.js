import {
  loadOffer,
  redirectToRoute,
  loadOffers,
  loadOffersNearby,
  loadReviews,
  requiredAuthorization,
  loadUserInfo
} from './action';
import { AuthorizationStatus, APIRoute, AppRoute } from '../const';
import { adaptToClient, adaptUserInfo, adaptReview } from '../utils/utils';

export const fetchOffer = (id) => (dispatch, _getState, api) =>
  api
    .get(`${APIRoute.OFFERS}/${id}`)
    .then(({ data }) => dispatch(loadOffer(adaptToClient(data))))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)));

export const fetchOfferList = () => (dispatch, _getState, api) =>
  api.get(APIRoute.OFFERS).then(({ data }) => {
    dispatch(loadOffers(data.map(adaptToClient)));
  });

export const fetchOfferNearbyList = (id) => (dispatch, _getState, api) =>
  api
    .get(`${APIRoute.OFFERS}/${id}${APIRoute.OFFERS_NEARBY}`)
    .then(({ data }) => {
      dispatch(loadOffersNearby(data.map(adaptToClient)));
    });

export const fetchReviewList = (id) => (dispatch, _getState, api) =>
  api.get(`${APIRoute.REVIEWS}/${id}`).then(({ data }) => {
    dispatch(loadReviews(data.map((item) => adaptReview(item))));
  });

export const checkAuth = () => (dispatch, _getState, api) =>
  api
    .get(APIRoute.LOGIN)
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH)));

export const login =
  ({ login: email, password }) =>
    (dispatch, _getState, api) =>
      api
        .post(APIRoute.LOGIN, { email, password })
        .then(({ data }) => {
          localStorage.setItem('token', data.token);
          dispatch(loadUserInfo(adaptUserInfo(data)));
        })
        .then(() => dispatch(requiredAuthorization(AuthorizationStatus.AUTH)))
        .then(() => dispatch(redirectToRoute(AppRoute.MAIN)));

export const logout = () => (dispatch, _getState, api) =>
  api
    .delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(logout()))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)));

export const sendReview =
  ({ comment, rating, id }) =>
    (dispatch, _getState, api) =>
      api
        .post(`${APIRoute.REVIEWS}/${id}`, { comment, rating })
        .then(({ data }) => {
          dispatch(loadReviews(data.map(adaptReview)));
        });
