import '../Models.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const ModelCard = ({ name, image , id}) => {
    let url = `/profile/${id}`;
    return (
        <div className="modelSection">
            <Fade bottom cascade>
            <h3 className="modelName">{name}</h3>
            <figure>
                <Link to={url} ><img className="image" src={image} alt={name} /></Link>
            </figure>
            </Fade>
        </div>
    )
}

export default ModelCard;