import logo from '../../../Assets/Logo.png';
import logoMinimal from '../../../Assets/LogoMobile.png';
import {Link } from "react-router-dom";
import './Logo.css';

function Logo() {
    return (
        <div className="Logo pb-md-5 mt-3">
            <Link to="/"><img src={ (window.innerWidth <768) ? logoMinimal :  logo} alt="logo" /></Link>
        </div>
    )
}

export default Logo;

