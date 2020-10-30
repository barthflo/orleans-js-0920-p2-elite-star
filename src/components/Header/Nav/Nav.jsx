
import {Link } from "react-router-dom";
import './Nav.css';




function Nav() {
    return (
      <div className="Nav pt-4 w-100 col-md-4">
        <ul className="w-100 list-unstyled align-items-center d-flex flex-column flex-md-row d-md-inline-flex justify-content-around">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/models">Models</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>   
      </div>
    );
  }


  export default Nav;
