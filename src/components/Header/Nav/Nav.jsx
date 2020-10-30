
import {Link } from "react-router-dom";
import './Nav.css';




function Nav() {
    return (
      <div className="nav pt-4 w-100">
        <ul className="ul w-100 d-inline-flex justify-content-around">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/models">Models</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>   
      </div>
    );
  }


  export default Nav;