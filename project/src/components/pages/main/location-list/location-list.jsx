import React from 'react';
import PropTypes, { string } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { changeCity } from '../../../../store/action';
import { getCity } from '../../../../store/process/selectors';
import { AppRoute } from '../../../../const';

function LocationList({ locations, city }) {
  const dispatch = useDispatch();
  return (
    <ul className="locations__list tabs__list">
      {locations.map((item) => (
        <li className="locations__item" key={item}>
          <Link
            to={AppRoute.MAIN}
            onClick={() => {
              dispatch(changeCity(item));
            }}
            className={
              city === item
                ? 'locations__item-link tabs__item tabs__item--active'
                : 'locations__item-link tabs__item'
            }
          >
            <span>{item}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

LocationList.propTypes = {
  city: PropTypes.string.isRequired,
  locations: PropTypes.arrayOf(string).isRequired,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
});

export { LocationList };
export default connect(mapStateToProps, null)(LocationList);
