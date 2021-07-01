import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SORT_VALUES } from '../../const';

const sortValues = Object.values(SORT_VALUES);

function SortList({ onSortChange, defaultSort }) {
  const [openSort, setOpenSort] = useState(false);
  return (
    <div className="places__sorting" onClick={() => setOpenSort(!openSort)}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0">
        {defaultSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          openSort && 'places__options--opened'
        }`}
      >
        {sortValues.map((item) => (
          <li
            className={`places__option ${
              item === defaultSort && 'places__option--active'
            }`}
            tabIndex="0"
            key={item}
            onClick={() => onSortChange(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

SortList.propTypes = {
  onSortChange: PropTypes.func.isRequired,
  defaultSort: PropTypes.string.isRequired,
};

export default SortList;
