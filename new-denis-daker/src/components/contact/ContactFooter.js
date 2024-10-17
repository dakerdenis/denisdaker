import React from 'react';
import SocialLinks from "./SocialLinks";
import Logo from '../../assets/contact/Logo.svg'

const ContactFooter = () => {
  return (
    <div className="contact__footer">      
        <img className='contact__footer_image' src={Logo} alt="" />
        <SocialLinks />
        <div className='contact__social__text contact__social__text1'>
        Daker Creative Studio
        </div>
        <div className='contact__social__text contact__social__text2'>
        © 2024 daker.website - All rights reserved
        </div>
    </div>
  );
};

export default ContactFooter;
