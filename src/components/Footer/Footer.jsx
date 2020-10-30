import React from 'react';
import './Footer.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Footer() {
    return (
        <div>
            <footer className="main-footer">
                <div className="Eliteaccess">
                    <div className="Contact">
                        <div className="Alderaan">
                            <h2 className="h2alde">ALDERAAN</h2>
                            <div>
                                <p className="pAld"><a href="mailto:example.com"> elitestar@force.al</a> <br />
                                    <a href="tel:00000000" >0679497610</a>  <br />
                                    <a href="https://goo.gl/maps/YMwRMT58xhVPdA8d8">Level 7, Anvil House <br />
                            138 Wakefield Street <br />
                            Floreltiaan, AL</a>
                                </p>
                            </div>
                        </div>

                        <div className="Coruscant">
                            <h2 className="h2cor">CORUSCANT</h2>
                            <div>
                                <p className="pCor"><a href="mailto:example.com">      elitestar@dark.rep</a> <br />
                                    <a href="tel:00000000" >0679497610</a> <br /> <a href="https://goo.gl/maps/acaUiLjsJCprCGZ66">
                                        Keizersgracht 174-11016 DW
                                Sor-Akai Coruscant</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="About">
                        <h2 className="h2about">ABOUT US</h2>
                        <p className="pAb">
                            <a href="example.com">Elite Star Team</a> <br />
                            <a href="example.com">Models</a> <br />
                            <a href="example.com">Press</a> <br />
                            <a href="example.com">Career</a> <br />
                            <a href="example.com">Newsletter</a></p>
                    </div>
                </div>
            </footer>
            <div className="mixBot">
                <div className="icones">
                    <FaFacebookSquare className="fbicone" />
                    <FaInstagram className="instaicone" />
                    <FaTwitter className="twittericone" />
                </div>
                <div className="footer-bottom"><p className="copyright">&copy;{new Date().getFullYear()} Elite Star - All Rights Reserved</p></div>
            </div>

        </div>
    );
}

export default Footer;