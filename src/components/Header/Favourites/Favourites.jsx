import {RiUserHeartLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';
import './Favourites.css';
import {CharactersContext} from '../../../App';
import {useContext} from 'react';

function Favourites() {
  const {characters} = useContext(CharactersContext);
  let favourites = characters.filter(character => character.isFavourite);
    return (
      <div className="Favourites mx-1">
        <Link to="/my-list">
        <div className="btn p-1 position-relative">
          {favourites.length > 0 &&
            <span className="counter d-flex justify-content-center align-items-center">{favourites.length}</span>
          }
          <RiUserHeartLine className="button-favourites"/>
        </div>
        </Link>
      </div>
    )
  };
  
export default Favourites;