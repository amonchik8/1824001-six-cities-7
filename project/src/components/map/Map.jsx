import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { offersType } from '../../types';

function Map({ offers, selectedPoint, city }) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers, city);

  const iconDefault = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
  const iconActive = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((hotel) => {
        leaflet
          .marker(
            {
              lat: hotel.location.latitude,
              lng: hotel.location.longitude,
            },
            {
              icon: hotel?.id === selectedPoint?.id ? iconActive : iconDefault,
            },
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedPoint, iconDefault, iconActive]);

  return <div id="map" style={{ height: '100%' }} ref={mapRef}></div>;
}
Map.propTypes = {
  offers: PropTypes.arrayOf(offersType),
  selectedPoint: PropTypes.object,
  city: PropTypes.string,
};

export default Map;
