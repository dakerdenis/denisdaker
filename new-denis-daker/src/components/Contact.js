import React, { useState, useEffect } from "react";
import "../styles/contact.css";
import dot from "../assets/dot.svg";


const Contact = () => {


    return (
        <section id="contact">
            <div className="contact__wrapper">
                <div className="contact__desc">
                    <p>Leave your details for feedback or contact me in a way convenient for you.</p>
                </div>

                <div className="contact__container">
                    {/**contact image***/}
                    <div className="contact__image">
                            <div className="contact__image-name">
                                <p>Contact</p>
                                <img src={dot} alt="" />
                            </div>
                    </div>
                    {/**contact form***/}
                    <div className="contact__form">
                        <div className="contact__form-form">

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
