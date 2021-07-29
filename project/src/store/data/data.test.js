import { data } from './data';
import { ActionType } from '../action';

describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(data(undefined, {})).toEqual({
      offer: {},
      offers: [],
      offersNearby: [],
      isDataLoaded: false,
      reviews: [],
    });
  });

  it('should update offers by loaded data', () => {
    const state = {
      offer: {},
      offers: [],
      offersNearby: [],
      isDataLoaded: false,
      reviews: [],
    };

    const loadOffers = {
      type: ActionType.LOAD_OFFERS,
      payload: [{ offer: 'offer' }, { offer: 'offer' }],
    };

    expect(data(state, loadOffers)).toEqual({
      offers: [{ offer: 'offer' }, { offer: 'offer' }],
      offer: {},
      reviews: [],
      isDataLoaded: true,
      offersNearby: [],
    });
  });

  it('should update offer by loaded data', () => {
    const state = {
      offer: {},
      offers: [],
      offersNearby: [],
      isDataLoaded: false,
      reviews: [],
    };

    const loadOffer = {
      type: ActionType.LOAD_OFFER,
      payload: { offer: 'offer' },
    };

    expect(data(state, loadOffer)).toEqual({
      offers: [],
      offer: { offer: 'offer' },
      reviews: [],
      isDataLoaded: true,
      offersNearby: [],
    });
  });

  it('should update offers nearby by loaded data', () => {
    const state = {
      offers: [],
      offer: {},
      reviews: [],
      isDataLoaded: false,
      offersNearby: [],
    };

    const loadOffersNearby = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: [{ offer: 'offer' }, { offer: 'offer' }],
    };

    expect(data(state, loadOffersNearby)).toEqual({
      offers: [],
      offer: {},
      reviews: [],
      isDataLoaded: false,
      offersNearby: [{ offer: 'offer' }, { offer: 'offer' }],
    });
  });

  it('should update reviews by loaded data', () => {
    const state = {
      offers: [],
      offer: {},
      reviews: [],
      isDataLoaded: false,
      offersNearby: [],
    };

    const loadReviews = {
      type: ActionType.LOAD_REVIEWS,
      payload: [{ review: 'review' }, { review: 'review' }],
    };

    expect(data(state, loadReviews)).toEqual({
      offers: [],
      offer: {},
      reviews: [{ review: 'review' }, { review: 'review' }],
      isDataLoaded: false,
      offersNearby: [],
    });
  });
});
