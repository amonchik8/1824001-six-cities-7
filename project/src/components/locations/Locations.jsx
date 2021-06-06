import React from 'react';
import Location from '../location';
import { locationsType } from '../../types';

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

Locations.propTypes = locationsType;
