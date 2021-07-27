import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { PlaceClass, SORT_VALUES, Locations } from '../../../const';
import { sortOffers } from '../../../utils/utils';
import { PlaceCardList, Map } from '../../common';
import Header from '../../common/header/header';
import { getOffers } from '../../../store/data/selectors';
import { getCity } from '../../../store/process/selectors';
import SortList from './sort-list';
import LocationList from './location-list';
import MainEmpty from './main-empty/main-empty';

function Main() {
  const offers = useSelector(getOffers);
  const city = useSelector(getCity);
  const { POPULAR } = SORT_VALUES;
  const [sortType, setSortType] = useState(POPULAR);
  const [selectedPoint, setSelectedPoint] = useState({});

  const offersQuantity = offers?.filter(
    (item) => item.city.name === city).length;

  const onListItemHover = (id) => {
    const currentOffer = offers.find((offer) => offer.id === id);
    if (currentOffer) {
      setSelectedPoint(currentOffer);
    }
  };

  const sortedOffers = sortOffers(offers, POPULAR);

  const sortedByCityOffers = sortedOffers.filter(
    (offer) => offer.city.name === city);

  const handleSortClick = (value) => setSortType(value);

  if (!offers.length) {
    return <MainEmpty city={city} />;
  }
  return (
    <>
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationList locations={Object.values(Locations)} />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {offersQuantity} places to stay in {city}
                </b>
                <SortList onSortChange={handleSortClick} sortType={sortType} />
                <div className="main__places">
                  <PlaceCardList
                    city={city}
                    offers={sortedOffers}
                    type={PlaceClass.MAIN}
                    sortType={sortType}
                    sortOffers={sortOffers}
                    onListItemHover={onListItemHover}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    offers={sortedByCityOffers}
                    selectedPoint={selectedPoint}
                    city={sortedByCityOffers[0].city}
                  />
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

export default Main;
