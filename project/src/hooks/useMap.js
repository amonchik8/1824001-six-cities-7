import { useEffect, useState } from 'react';
import leaflet from 'leaflet';
import { CITIES } from '../const';

function useMap(mapRef, offers, city) {
  const [map, setMap] = useState(null);
  const location = CITIES?.find((item) => item.name === city);
  useEffect(() => {
    const { latitude, longitude, zoom } = location.location;
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);
      setMap(instance);
    }

    if (map !== null) {
      map.panTo([latitude, longitude], zoom);
    }

  }, [mapRef, map, offers, city, location.location]);

  return map;
}

export default useMap;
