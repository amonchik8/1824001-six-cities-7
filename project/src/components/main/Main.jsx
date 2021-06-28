import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PlaceClass } from '../../const';
import { offersType } from '../../types';
import { OFFERS } from '../../mocks/offers';
import Header from '../header/Header';
import LocationList from '../location-list/LocationList';
import PlaceCardList from '../place-card-list';
import Map from '../map/Map';

function Main({ offers }) {
  const [selectedPoint, setSelectedPoint] = useState({});

  const onListItemHover = (id) => {
    const currentHotel = offers.find((offer) => offer.id === id);
    if (currentHotel) {
      setSelectedPoint(currentHotel);
    }
  };

  const [city, setCity] = useState('Paris');

  const offersQuantity = OFFERS.filter(
    (item) => item.city.name === city).length;

  return (
    <>
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationList getCity={(e) => setCity(e)} />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {offersQuantity} places to stay in {city}
                </b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li
                      className="places__option places__option--active"
                      tabIndex="0"
                    >
                      Popular
                    </li>
                    <li className="places__option" tabIndex="0">
                      Price: low to high
                    </li>
                    <li className="places__option" tabIndex="0">
                      Price: high to low
                    </li>
                    <li className="places__option" tabIndex="0">
                      Top rated first
                    </li>
                  </ul>
                </form>
                <div className="main__places">
                  <PlaceCardList
                    city={city}
                    offers={offers}
                    type={PlaceClass.MAIN}
                    onListItemHover={onListItemHover}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={offers} selectedPoint={selectedPoint} />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"
            />
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            />
          </symbol>
        </svg>
      </div>
    </>
  );
}

Main.propTypes = {
  offers: PropTypes.arrayOf(offersType),
};
export default Main;
