import '../Models.css';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';

const ModelCard = ({ name, image , id}) => {
    let url = `/profile/${id}`;
    return (
        <div className="modelSection">
            <Zoom cascade bottom>
            <h3 className="modelName">{name}</h3>
            <figure>
                <Link to={url} ><img src={image} alt={name} /></Link>
            </figure>
            </Zoom>
        </div>
    )
}

export default ModelCard;