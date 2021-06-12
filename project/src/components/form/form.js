import React, { useState } from 'react';
import RadioButton from '../radio-button/RadioButton';

function Form() {
  const [, setUserRating] = useState(0);
  const [message, setMessage] = useState('');
  const ratingId = [5, 4, 3, 2, 1];

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {ratingId.map((item) => (
          <RadioButton
            id={item}
            key={item}
            onChange={(id) => setUserRating(id)}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled=""
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
