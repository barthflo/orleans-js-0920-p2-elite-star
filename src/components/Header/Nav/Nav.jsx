
import {Link } from "react-router-dom";
import './Nav.css';
import {CgMenuGridO} from "react-icons/cg";
import {useState} from 'react';

function Nav({useWindowSize}) {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    return (
      <div onClick={toggle} className="Nav pt-md-4 w-100 col-2 col-sm-1 col-md-5 col-lg-6">
        <ul className={"w-100 mb-0 mb-md-3 list-unstyled align-items-center flex-column py-4 py-md-0 flex-md-row d-md-inline-flex justify-content-around" + (open ? " d-flex" : " collapse")}>
          <li className="my-1"><Link to="/">Home</Link></li>
          <li className="my-1"><Link to="/models">Models</Link></li>
          <li className="my-1"><Link to="/about">About</Link></li>
        </ul>
        { useWindowSize()<768 && <CgMenuGridO onClick={toggle} color={"white"} size={"2em"} />}   
      </div>
    );
  }


  export default Nav;
