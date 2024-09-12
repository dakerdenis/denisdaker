import React from "react";
import poligon1 from "../assets/contact/poligon1.svg";
import poligon2 from "../assets/contact/poligon2.svg";
import poligon3 from "../assets/contact/poligon3.svg";
import poligon4 from "../assets/contact/poligon4.svg";
import poligon5 from "../assets/contact/poligon5.svg";
import poligon6 from "../assets/contact/poligon6.svg";

const ContactPolygons = () => {
  return (
    <>
      <div className="contact_poligon contact_poligon1">
        <img src={poligon1} alt="" />
      </div>
      <div className="contact_poligon contact_poligon2">
        <img src={poligon2} alt="" />
      </div>
      <div className="contact_poligon contact_poligon3">
        <img src={poligon3} alt="" />
      </div>
      <div className="contact_poligon contact_poligon4">
        <img src={poligon4} alt="" />
      </div>
      <div className="contact_poligon contact_poligon5">
        <img src={poligon5} alt="" />
      </div>
      <div className="contact_poligon contact_poligon6">
        <img src={poligon6} alt="" />
      </div>
    </>
  );
};

export default ContactPolygons;
