import logo from '../../../assets/Logo.png';
import logoMinimal from '../../../assets/LogoMobile.png';
import {Link } from "react-router-dom";
import './Logo.css';

function Logo() {
    return (
        <div className="Logo pb-md-4 mt-1">
            <Link to="/"><img src={ (window.innerWidth <768) ? logoMinimal :  logo} alt="logo" /></Link>
        </div>
    )
}

export default Logo;

