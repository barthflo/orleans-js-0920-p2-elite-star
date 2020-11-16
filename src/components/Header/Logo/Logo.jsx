import logo from '../../../assets/Logo.png';
import logoMinimal from '../../../assets/LogoMobile.png';
import {Link } from "react-router-dom";
import './Logo.css';

function Logo({useWindowSize}) {
    return (
        <div className="Logo p-2 pb-md-4 mt-1">
            <Link to="/"><img src={ (useWindowSize() <768) ? logoMinimal :  logo} alt="logo" /></Link>
        </div>
    )
}

export default Logo;

