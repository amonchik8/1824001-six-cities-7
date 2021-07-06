import React from 'react';
import { Link } from 'react-router-dom';
import { offersType } from '../../types';
import { placeCardClass } from '../../const';

function PlaceCard({
  title,
  isPremium,
  price,
  type,
  previewImage,
  id,
  rating,
  placeClass,
  isFavorite,
  listItemHoverHandler = () => {},
}) {
  return (
    <article
      className={placeCardClass[placeClass].className}
      onMouseEnter={() => {
        listItemHoverHandler(id);
      }}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>{isPremium && 'Premium'}</span>
        </div>
      )}
      <div
        className={`${placeCardClass[placeClass].type}__image-wrapper place-card__image-wrapper`}
      >
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={placeCardClass[placeClass].width}
            height={placeCardClass[placeClass].width}
            alt="Place"
          />
        </Link>
      </div>
      <div className={placeCardClass[placeClass].classNameInfo}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              isFavorite ? ' place-card__bookmark-button--active' : ''
            }`}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `calc(${Math.round(rating) * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
PlaceCard.propTypes = offersType.isRequired;

export default PlaceCard;
