import React from 'react';
import PropTypes from 'prop-types';
import Location from '../location';

function Locations({ locations }) {
  return (
    <ul className="locations__list tabs__list">
      {locations.map((item) => (
        <Location key={item} locationName={item} />
      ))}
    </ul>
  );
}

export default Locations;

Locations.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string).isRequired,
};
