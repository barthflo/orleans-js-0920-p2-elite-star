import logo from '../../../assets/Logo.png';
import {Link } from "react-router-dom";

function Logo() {
    return (
        <div className="Logo pb-5 mt-3 col-1">
            <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
    )
}

export default Logo;

