import React from 'react';
import './loading-screen.css';

export function LoadingScreen() {
  return (
    <div className="loadcontainer">
      <div className="lds-dual-ring"></div>;
    </div>
  );
}

export default LoadingScreen;
