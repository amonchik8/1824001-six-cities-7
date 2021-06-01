import React from 'react';
import PlaceCard from '../place-card';
import PropTypes from 'prop-types';
import Header from '../header';

function Main(props) {
  const { placesQuantity } = props;
  return (
    <div className="main">
      <Header />
      <div className="body">
        <h3 className="city-title">
          {placesQuantity} places to stay in Amstrerdam
        </h3>
        <div className="places-sort">
          <span className="places-sort-decoration">Sort by</span>
          Popular
          <img className="plasec-sort-icon" src="" alt="arrow-down" />
        </div>
        <ul className="places-list">
          <PlaceCard />
        </ul>
      </div>
      <div className="map">map</div>
    </div>
  );
}

Main.propTypes = {
  placesQuantity: PropTypes.number.isRequired,
};
export default Main;
