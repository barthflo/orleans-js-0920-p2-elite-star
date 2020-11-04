import './WeekSelection.css';
import RandomText from './RandomText';


const SelectionCard = ({ name, image, species, eyeColor, hairColor, bornLocation }) => {
    return (
        <div className="cardSelection">
            <h3>{name}</h3>
            <figure><img className="img" src={image} alt={name} /></figure>
            <p id="quote"><RandomText/></p>
            <p>{name} a {species} {bornLocation ? (<p>from {bornLocation}</p>) : ""} knew how to combine {eyeColor} eyes and {hairColor ? hairColor : "no"} hair.</p>
            
        </div>
    )
}

export default SelectionCard;