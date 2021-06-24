import React from 'react';
import PropTypes from 'prop-types';
import { hotelsType } from '../../types';
import { PlaceClass, placeCardClass } from '../../const';
import PlaceCard from '../place-card/PlaceCard';

function PlaceCardList({ hotels, onListItemHover = () => {}, type }) {
  return (
    <div className={`${placeCardClass[type].type}__places-list places__list tabs__content`}>
      {hotels.map((item) => (
        <PlaceCard
          key={item.id}
          title={item.title}
          isPremium={item.isPremium}
          price={item.price}
          type={item.type}
          previewImage={item.previewImage}
          id={item.id}
          rating={item.rating}
          placeClass={PlaceClass[type]}
          listItemHoverHandler={(id) => onListItemHover(id)}
        />
      ))}
    </div>
  );
}
PlaceCardList.propTypes = {
  hotels: PropTypes.arrayOf(hotelsType),
  onListItemHover: PropTypes.func,
  type: PropTypes.string,
};

export default PlaceCardList;
