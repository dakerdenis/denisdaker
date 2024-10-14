import React from "react";
import "../styles/Preloader.css"; // Assuming this is where your styles are
import daker from '../assets/contact/Logo.svg'

const Preloader = () => {
  return (
    <div id="preloader">
      <div id="loader">
      </div>

        <div className="preloader_image">
            <img src={daker} alt="" />
        </div>

    </div>
  );
};

export default Preloader;
