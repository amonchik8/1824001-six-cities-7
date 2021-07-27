import React from 'react-dom';
import { Link } from 'react-router-dom';
import './not-found.css';

function NotFound() {
  return (
    <div className="not-found">
      <h1 className="title">404 - page not found</h1>
      <Link to="/">{'>> Go to main page <<'}</Link>
    </div>
  );
}
export default NotFound;
