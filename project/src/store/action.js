export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFERS_NEARBY: 'offers/loadOffersNearby',
  LOAD_REVIEWS: 'reviews/loadReviews',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOAD_USER_INFO: 'user/loadUserInfo',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'main/redirectToRoute',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadOffersNearby: (offersNearby) => ({
    type: ActionType.LOAD_OFFERS_NEARBY,
    payload: offersNearby,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    status,
  }),
  loadUserInfo: (userInfo) => ({
    type: ActionType.LOAD_USER_INFO,
    payload: userInfo,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
