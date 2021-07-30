import React from 'react-dom';
import { useSelector } from 'react-redux';
import { logout } from '../../../store/api-actions';
import {
  getAuthorizationStatus,
  getUserEmail,
  getUserAvatar
} from '../../../store/user/selectors';
import { AuthorizationStatus } from '../../../const';
import HeaderSignOut from './sign-out';
import HeaderSignIn from './sign-in';

function Header() {
  const userEmail = useSelector(getUserEmail);
  const avatarUrl = useSelector(getUserAvatar);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <header className="header">
      {(authorizationStatus === AuthorizationStatus.AUTH && (
        <HeaderSignOut
          logoutApp={logout}
          userEmail={userEmail}
          avatarUrl={avatarUrl}
        />
      )) || <HeaderSignIn />}
    </header>
  );
}

export default Header;
