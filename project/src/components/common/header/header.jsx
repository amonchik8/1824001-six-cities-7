import React from 'react-dom';
import { useSelector } from 'react-redux';
import { logout } from '../../../store/api-actions';
import {
  getAuthorizationStatus,
  loadUserInfo
} from '../../../store/user/selectors';
import { AuthorizationStatus } from '../../../const';
import HeaderSignOut from './sign-out';
import HeaderSignIn from './sign-in';

function Header() {
  const username = useSelector(loadUserInfo);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const { email, avatarUrl } = username;

  return (
    <header className="header">
      {(authorizationStatus === AuthorizationStatus.AUTH && (
        <HeaderSignOut email={email} avatarUrl={avatarUrl} logoutApp={logout} />
      )) || <HeaderSignIn />}
    </header>
  );
}

export default Header;
