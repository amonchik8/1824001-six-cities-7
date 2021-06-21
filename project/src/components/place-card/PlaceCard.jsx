import React from 'react';
import { Link } from 'react-router-dom';
import { hotelsType } from '../../types';

function PlaceCard({
  title,
  isPremium,
  price,
  type,
  previewImage,
  id,
  rating,
  listItemHoverHandler = () => {},
}) {
  return (
    <article
      className={`${
        window.location.pathname === '/favorites'
          ? 'favorites__card'
          : 'cities__place-card'
      } place-card`}
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
        className={`${
          window.location.pathname === '/favorites'
            ? 'favorites__image-wrapper'
            : 'cities__image-wrapper'
        } place-card__image-wrapper`}
      >
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={`img/apartment-${previewImage}`}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <div
        className={`${
          window.location.pathname === '/favorites'
            ? 'favorites__card-info'
            : ''
        } place-card__info`}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
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
PlaceCard.propTypes = hotelsType.isRequired;

export default PlaceCard;
