import React, { useEffect, useState } from 'react';
import '../styles/Preloader.css'; // Add this file for preloader-specific CSS

const Preloader = () => {
  return (
    <div id="preloader">
      <div id="loader"></div>
    </div>
  );
};

export default Preloader;
