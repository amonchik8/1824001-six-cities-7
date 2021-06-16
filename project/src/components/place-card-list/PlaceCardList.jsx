import React, { useState } from 'react';
import PlaceCard from '../place-card/PlaceCard';
import { hotelsType } from '../../types';
import PropTypes from 'prop-types';

function PlaceCardList({ hotels }) {
  const [, setActiveCard] = useState({ id: null });

  return (
    <div className="cities__places-list places__list tabs__content">
      {hotels.map((item) => (
        <PlaceCard
          key={item.title}
          title={item.title}
          isPremium={item.isPremium}
          price={item.price}
          type={item.type}
          previewImage={item.previewImage}
          id={item.id}
          setActiveCard={setActiveCard}
        />
      ))}
    </div>
  );
}
PlaceCardList.propTypes = {
  hotels: PropTypes.arrayOf(hotelsType),
};

export default PlaceCardList;
