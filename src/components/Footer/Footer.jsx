import React from 'react';
import './Footer.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className="mainDivFooter">
            <footer className="main-footer">
                <div className="Contact">
                    <div className="Alderaan">
                        <h2 className="h2alde">ALDERAAN</h2>
                        <div>
                            <p className="pAld"><a href="mailto:example.com"> elitestar@force.al</a> <br />
                                <a href="tel:00000000">0679497610</a>  <br />
                                <a href="https://goo.gl/maps/YMwRMT58xhVPdA8d8">Level 7, Anvil House <br />
                                        138 Wakefield Street <br /> Floreltiaan, AL</a>
                            </p>
                        </div>
                    </div>
                    <div className="Coruscant">
                        <h2 className="h2cor">CORUSCANT</h2>
                        <div>
                            <p className="pCor"><a href="mailto:example.com">elitestar@dark.rep</a> <br />
                                <a href="tel:00000000" >0679497610</a> <br /> <a href="https://goo.gl/maps/acaUiLjsJCprCGZ66">
                                     Keizersgracht 174-11016 DW Sor-Akai Coruscant</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="About">
                    <p className="pAb">
                        <Link to="/home">Home</Link> <br />
                        <Link to="/about"> About </Link><br />
                        <Link to="/models">Models</Link> <br />
                    </p>
                    <div className="icones">
                        <a href="https://www.facebook.com/EliteModelLook"><FaFacebookSquare className="fbicone" /></a>
                        <a href="https://www.instagram.com/elitemodellook"><FaInstagram className="instaicone" /></a>
                        <a href="https://twitter.com/EML_Int"><FaTwitter className="twittericone" /></a>
                    </div>
                </div>
            </footer>
            <div className="footer-bottom"><p className="copyright">&copy;{new Date().getFullYear()} Elite Star - All Rights Reserved</p></div>
        </div>
    );
}

export default Footer;