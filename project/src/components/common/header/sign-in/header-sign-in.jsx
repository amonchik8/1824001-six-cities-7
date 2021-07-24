import React from 'react-dom';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../const';
import { Logo } from '../../logo';

export function HeaderSignIn() {
  return (
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
  );
}

export default HeaderSignIn;
