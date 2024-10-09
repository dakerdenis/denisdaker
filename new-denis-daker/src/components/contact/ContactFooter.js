import React from 'react';
import SocialLinks from "./SocialLinks";
import Logo from '../../assets/contact/Logo.svg'

const ContactFooter = () => {
  return (
    <div className="contact__footer">      
        <img src={Logo} alt="" />
        <SocialLinks />
    </div>
  );
};

export default ContactFooter;
