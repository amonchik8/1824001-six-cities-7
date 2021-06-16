import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { hotelsType } from '../../types';

function Map({ hotels }) {
  const mapRef = useRef(null);
  useMap(mapRef, hotels);

  return <div id="map" style={{ height: '100%' }} ref={mapRef}></div>;
}
Map.propTypes = {
  hotels: PropTypes.arrayOf(hotelsType),
};

export default Map;
