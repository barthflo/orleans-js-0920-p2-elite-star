import logo from '../../../Assets/Logo.png';
import logoMobile from '../../../Assets/LogoMobile.png';
import './Logo.css';
import {Link } from "react-router-dom";

function Logo() {
    return (
        <div className="logo pb-5 mt-3 col-2">
            <Link to="/"><img src={ window.innerWidth < 768 ? {logo} : {logoMobile}} alt='logo'/></Link>
        </div>
    )
}

export default Logo;

