import { createReducer } from '@reduxjs/toolkit';
import {
  loadOffer,
  loadOffers,
  loadOffersNearby,
  loadReviews,
  loadFavorites,
  updateFavorites
} from '../action';

const initialState = {
  offer: {},
  offers: [],
  offersNearby: [],
  isDataLoaded: false,
  reviews: [],
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(updateFavorites, (state, action) => {
      const updatedOffer = action.payload;
      const idx = state.offers.findIndex((offer) => offer.id === updatedOffer.id);
      state.offers = [
        ...state.offers.slice(0, idx),
        updatedOffer,
        ...state.offers.slice(idx + 1),
      ];
    });
});

export { data };
