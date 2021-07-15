import React from 'react';
import PropTypes from 'prop-types';

function RadioButton({ rating }) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating}
        id={`${rating}-stars`}
        type="radio"
      />
      <label
        htmlFor={`${rating}-stars`}
        className="reviews__rating-label form__rating-label"
        title="perfect"
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

RadioButton.propTypes = {
  rating: PropTypes.number,
};

export default RadioButton;
