import './Models.css';
import {Link} from 'react-router-dom';
import ProfilPage from './ProfilPage';

const ModelCard = ({ name, image }) => {
    return (
        <div className="modelSection">
            <h3 className="modelName">{name}</h3>
            <figure>
                <Link to="/profil-page"><img className="image" src={image} alt={name} /></Link>
            </figure>
        </div>
    )
}

export default ModelCard;