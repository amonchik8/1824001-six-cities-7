import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchReviewList, sendReview } from '../../../../store/api-actions';
import { MIN_SYMBOL_COUNT, MAX_SYMBOL_COUNT } from '../../../../const';
import Rating from './rating';

function Form({ submit, id, loadReviewList }) {
  const [review, setReview] = useState({
    rating: '',
    review: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    submit({ comment: review.review, rating: review.rating, id });
    loadReviewList(id);
    setReview((state) => ({
      ...state,
      review: '',
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <Rating handleChange={handleChange} />
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        maxLength={MAX_SYMBOL_COUNT}
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
        value={review.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            !(review.review.length >= MIN_SYMBOL_COUNT && review.rating)
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  submit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  loadReviewList: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  submit: sendReview,
  loadReviewList: fetchReviewList,
};

export default connect(null, mapDispatchToProps)(Form);
