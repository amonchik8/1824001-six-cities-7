import React from 'react';
import PropTypes from 'prop-types';
import Location from '../location';

function Locations({ locations, locationName }) {
  return (
    <ul className="locations__list tabs__list">
      {locations.map((item, idx) => (
        <Location key={locationName} locationName={locations[idx]} />
      ))}
    </ul>
  );
}

export default Locations;

Locations.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string).isRequired,
  locationName: PropTypes.string.isRequired,
};
