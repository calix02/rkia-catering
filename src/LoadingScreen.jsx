import React from "react";
import "./loading.css";

const LoadingScreen = () => {
  return (
    <div className="loading-wrapper">
      <div className="loader"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default LoadingScreen;
