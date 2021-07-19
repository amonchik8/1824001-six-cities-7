import React from 'react';
import PropTypes from 'prop-types';
import { offersType } from '../../../types';
import { PlaceClass, placeCardClass } from '../../../const';
import PlaceCard from './place-card/place-card';

export function PlaceCardList({ offers, city, onListItemHover = () => {}, type, sortType, sortOffers}) {

  return (
    <div
      className={`${placeCardClass[type].type}__places-list places__list tabs__content`}
    >
      {sortOffers(offers, sortType)?.map((item) =>
        item.city.name === city ? (
          <PlaceCard
            key={item.id}
            title={item.title}
            isPremium={item.isPremium}
            isFavorite={item.isFavorite}
            price={item.price}
            type={item.type}
            previewImage={item.previewImage}
            id={item.id}
            rating={item.rating}
            placeClass={PlaceClass[type]}
            listItemHoverHandler={(id) => onListItemHover(id)}
          />
        ) : (
          ''
        ),
      )}
    </div>
  );
}
PlaceCardList.propTypes = {
  offers: PropTypes.arrayOf(offersType),
  onListItemHover: PropTypes.func,
  type: PropTypes.string,
  city: PropTypes.string,
  sortType: PropTypes.string,
  sortOffers: PropTypes.func,
};

export default PlaceCardList;
