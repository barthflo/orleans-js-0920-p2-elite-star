import React from 'react';
import './Footer.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="d-flex flex-column align-items-center w-100 p-5">
            <div className="mb-5">
                <div className="Alderaan d-flex flex-column align-items-center my-4">
                    <h2 className="h2alde">ALDERAAN</h2>
                    <a href="mailto:example.com"> elitestar@force.al</a>
                    <a href="tel:00000000" >0679497610</a> 
                    <a className="text-center" href="https://goo.gl/maps/YMwRMT58xhVPdA8d8">
                        Level 7, Anvil House
                        138 Wakefield Street
                        Floreltiaan, AL
                    </a>
                </div>
                <div className="Coruscant d-flex flex-column align-items-center mb-5">
                    <h2>CORUSCANT</h2>
                    <a href="mailto:example.com">elitestar@dark.rep</a>
                    <a href="tel:00000000" >0679497610</a>
                    <a className="text-center"href="https://goo.gl/maps/acaUiLjsJCprCGZ66">
                        Keizersgracht 174-11016 DW
                        Sor-Akai Coruscan
                    </a>
                </div>
            </div>
            <div className="About d-flex flex-column align-items-center mb-4">
                <h2>ABOUT US</h2>
                <a href="example.com">Elite Star Team</a> 
                <a href="example.com">Models</a> 
                <a href="example.com">Press</a> 
                <a href="example.com">Career</a> 
                <a href="example.com">Newsletter</a>
            </div>
            <div className="social-medias mb-4 d-flex justify-content-center">
                <FaFacebookSquare className="mx-2"/>
                <FaInstagram className="mx-2" />
                <FaTwitter className="mx-2"/>
            </div>
            <p className="text-center">&copy;{new Date().getFullYear()} Elite Star - All Rights Reserved</p>
        </footer>
    );
}

export default Footer;