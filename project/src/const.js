export const AppRoute = {
  MAIN: '/',
  SIGN_IN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
};
export const PlaceClass = {
  MAIN: 'MAIN',
  FAVORITES: 'FAVORITES',
  NEAR_PLACES: 'NEAR_PLACES',
};

export const placeCardClass = {
  MAIN: {
    type: 'cities',
    className: 'cities__place-card place-card',
    classNameInfo: 'place-card__info',
    width: '260',
    height: '200',
  },
  FAVORITES: {
    type: 'favorites',
    className: 'favorites__card place-card',
    classNameInfo: 'favorites__card-info place-card__info',
    width: '150',
    height: '110',
  },
  NEAR_PLACES: {
    type: 'near-places',
    className: 'near-places__card place-card',
    classNameInfo: 'place-card__info',
    width: '260',
    height: '200',
  },
};
