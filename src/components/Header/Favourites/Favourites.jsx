import {RiUserHeartLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';
import './Favourites.css';

function Favourites() {
    return (
      <div className="Favourites mx-1">
        <Link to="/my-list">
        <div className="btn p-1">
          <RiUserHeartLine className="button-favourites"/>
        </div>
        </Link>
      </div>
    )
  };
  
export default Favourites;