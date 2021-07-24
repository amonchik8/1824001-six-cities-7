import { createReducer } from '@reduxjs/toolkit';
import {
  loadOffer,
  loadOffers,
  loadOffersNearby,
  loadReviews
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
    });
});

export { data };
