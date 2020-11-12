
import {Link } from "react-router-dom";
import './Nav.css';



function Nav() {
    return (
      <div className="Nav pt-4 w-100 col-1 col-sm-2 col-md-4 col-lg-6">
        <ul className="w-100 list-unstyled align-items-center d-flex flex-column flex-md-row d-md-inline-flex justify-content-around">
          <li className="my-1"><Link to="/">Home</Link></li>
          <li className="my-1"><Link to="/models">Models</Link></li>
          <li className="my-1"><Link to="/about">About</Link></li>
        </ul>   
      </div>
    );
  }


  export default Nav;
