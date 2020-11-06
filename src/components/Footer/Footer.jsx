import React from 'react';
import './Footer.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className=" w-100 p-5 pb-md-2">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-md-between align-items-md-baseline">
                <div className="mb-5 d-md-flex align-items-baseline justify-content-start w-75">
                    <div className="Alderaan d-flex flex-column align-items-center my-4 mx-md-5 w-md-50">
                        <h2>ALDERAAN</h2>
                        <a href="mailto:example.com"> elitestar@force.al</a>
                        <a href="tel:00000000" >0679497610</a>
                        <a className="text-center" href="https://goo.gl/maps/YMwRMT58xhVPdA8d8" target="__blank">
                            Level 7, Anvil House
                            138 Wakefield Street
                            Floreltiaan, AL
                        </a>
                    </div>
                    <div className="Coruscant d-flex flex-column align-items-center mb-5 mx-md-5">
                        <h2>CORUSCANT</h2>
                        <a href="mailto:example.com">elitestar@dark.rep</a>
                        <a href="tel:00000000" >0679497610</a>
                        <a className="text-center" href="https://goo.gl/maps/acaUiLjsJCprCGZ66" target="__blank">
                            Keizersgracht 174-11016 DW
                            Sor-Akai Coruscan
                        </a>
                    </div>
                </div>
                <div className="About d-flex flex-column align-items-center mb-4">
                    <h2>ABOUT US</h2>
                    <Link to="/about">Elite Star Team</Link>
                    <Link to="/models">Models</Link>
                    <Link to="/">Press</Link>
                    <Link className="mb-2" to="/">Partners</Link>
                    <div className="social-medias mb-4 d-flex justify-content-center">
                        <a href="https://www.facebook.com/Star-Wars-models-289226827755289" target="__blank"><FaFacebookSquare className="mx-2" /></a>
                        <a href="https://www.instagram.com/starwars/" target="__blank"><FaInstagram className="mx-2" /></a>
                        <a href="https://twitter.com/starwars/" target="__blank"><FaTwitter className="mx-2" /></a>
                    </div>
                </div>
            </div>
            <p className="text-center m-0">&copy;{new Date().getFullYear()} Elite Star - All Rights Reserved</p>
        </footer>
    );
}

export default Footer;