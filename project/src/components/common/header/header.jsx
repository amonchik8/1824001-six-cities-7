import React from 'react-dom';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { logout } from '../../../store/api-actions';
import {
  getAuthorizationStatus,
  getUserInfo
} from '../../../store/user/selectors';
import { Logo } from '../logo';

import { AuthorizationStatus, AppRoute } from '../../../const';

export function Header({
  authorizationStatus,
  email,
  avatarUrl,
  // loadUserInfo,
}) {
  const handleClick = () => {
    dispatch(logout());
    // loadUserInfo({});
  };
  const dispatch = useDispatch();

  return (
    <header className="header">
      {(authorizationStatus === AuthorizationStatus.AUTH && (
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
                    <span className="header__user-name user__name">
                      {email}
                    </span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    className="header__nav-link"
                    onClick={() => handleClick()}
                    to={AppRoute.MAIN}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )) || (
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.MAIN}>
                <Logo />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.SIGN_IN}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatarUrl: PropTypes.string,
  // loadUserInfo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  user: getUserInfo(state),
});

export default connect(mapStateToProps, null)(Header);
