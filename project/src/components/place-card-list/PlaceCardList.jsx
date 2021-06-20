import React from 'react';
import PropTypes from 'prop-types';
import { hotelsType } from '../../types';
import PlaceCard from '../place-card/PlaceCard';

function PlaceCardList({ hotels, onListItemHover }) {
  const listItemHoverHandler = (id) => {
    onListItemHover(id);
  };
  return (
    <div className="cities__places-list places__list tabs__content">
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
          listItemHoverHandler={listItemHoverHandler}
        />
      ))}
    </div>
  );
}
PlaceCardList.propTypes = {
  hotels: PropTypes.arrayOf(hotelsType),
  onListItemHover: PropTypes.func,
};

export default PlaceCardList;
