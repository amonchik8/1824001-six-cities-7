import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from '../radio-button/RadioButton';

const ratingId = [5, 4, 3, 2, 1];

function Rating({ handleChange }) {
  return (
    <div className="reviews__rating-form form__rating" onChange={handleChange}>
      {ratingId.map((item) => (
        <RadioButton rating={item} key={item} />
      ))}
    </div>
  );
}

Rating.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Rating;
