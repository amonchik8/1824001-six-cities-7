import React from 'react-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { AppRoute } from '../../../../const';
import { Logo } from '../../logo';

function HeaderSignOut({ userEmail, avatarUrl, logoutApp }) {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link
            className="header__logo-link header__logo-link--active"
            to={AppRoute.MAIN}
          >
            <Logo />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link
                className="header__nav-link header__nav-link--profile"
                to={AppRoute.FAVORITES}
              >
                <div className="header__avatar-wrapper user__avatar-wrapper">
                  <img
                    style={{ borderRadius: '50%' }}
                    src={avatarUrl}
                    alt={'user'}
                  />
                </div>
                <span className="header__user-name user__name">{userEmail}</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                onClick={() => {
                  dispatch(logoutApp());
                }}
                to={AppRoute.MAIN}
              >
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

HeaderSignOut.propTypes = {
  userEmail: PropTypes.string,
  avatarUrl: PropTypes.string,
  logoutApp: PropTypes.func.isRequired,
};

export default HeaderSignOut;
