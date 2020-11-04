import './WeekSelection.css';
import RandomText from './RandomText';


const SelectionCard = ({ name, id, image, species, eyeColor, hairColor, bornLocation }) => {
    return (
        <div className="cardSelection">
            <h3>{name}/ ID: {id}</h3>
            <figure><img className="img" src={image} alt={name} /></figure>
            <p>{name} a {species} {bornLocation ? (<p>from {bornLocation}</p>) : ""} knew how to combine {eyeColor} eyes and {hairColor ? hairColor : "no"} hair.</p>
            <p><RandomText/></p>
        </div>
    )
}

export default SelectionCard;