import React from 'react';
import PropTypes, { string } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppRoute } from '../../../../const';
import { ActionCreator } from '../../../../store/action';

function LocationList({ locations, city, changeCity }) {
  return (
    <ul className="locations__list tabs__list">
      {locations.map((item) => (
        <li className="locations__item" key={item}>
          <Link
            to={AppRoute.MAIN}
            onClick={() => {
              changeCity(item);
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
  changeCity: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(string).isRequired,
};

const mapStateToProps = ({ city }) => ({
  city,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export { LocationList };
export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
