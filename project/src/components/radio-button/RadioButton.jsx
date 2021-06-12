import React from 'react';
import PropTypes from 'prop-types';

function RadioButton({ id, onChange }) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={id}
        id={`"${id}-stars"`}
        type="radio"
        onChange={(e) => {
          e.preventDefault();
          onChange(id);
        }}
      />
      <label
        htmlFor={`"${id}-stars"`}
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
  id: PropTypes.number,
  onChange: PropTypes.func,
};

export default RadioButton;
