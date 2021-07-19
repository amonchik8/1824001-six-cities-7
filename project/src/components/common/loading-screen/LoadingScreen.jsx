import React from 'react';
import './LoadingScreen.css';

export function LoadingScreen() {
  return (
    <div className="loadcontainer">
      <div className="lds-dual-ring"></div>;
    </div>
  );
}

export default LoadingScreen;
