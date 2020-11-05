import './WeekSelection.css';
import RandomText from './RandomText';
import {Link} from 'react-router-dom';

const SelectionCard = ({ name, image, species, eyeColor, hairColor, bornLocation, id }) => {
    let url = `/profil/${id}`;
    return (
        <div className="cardSelection">
            <h3>{name}</h3>
            <Link to={url}><figure><img className="img" src={image} alt={name} /></figure></Link>
            <p id="quote"><RandomText/></p>
            <p>{name} a {species} {bornLocation ? (<p>from {bornLocation}</p>) : ""} knew how to combine {eyeColor} eyes and {hairColor ? hairColor : "no"} hair.</p>
            
        </div>
    )
}

export default SelectionCard;