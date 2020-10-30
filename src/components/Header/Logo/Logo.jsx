import logo from '../../../Assets/Logo.png';
import {Link } from "react-router-dom";

function Logo() {
    return (
        <div className="logo pb-5 mt-3 col-2">
            <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
    )
}

export default Logo;

