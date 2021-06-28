import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CITIES } from '../../const';
import { ActionCreator } from '../../store/action';

function LocationList({ city, changeCity, getCity }) {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((item) => (
        <li className="locations__item" key={item.name}>
          <span
            className={`locations__item-link tabs__item ${
              item.name === city ? 'tabs__item--active' : ''
            }`}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              changeCity(item.name);
              getCity(item.name);
            }}
          >
            <span>{item.name}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

LocationList.propTypes = {
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  getCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export { LocationList };
export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
