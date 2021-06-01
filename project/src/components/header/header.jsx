import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-panel">
        <a href="/">
          <img src="" alt="logo" />
        </a>
        <div className="login-wrapper">
          <button type="button" className="login-button">
            Log In
          </button>
        </div>
      </div>
      <nav className="navigation">
        <ul className="navigation-list">
          <li className="navigation-item">Paris</li>
          <li className="navigation-item">Cologne</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
