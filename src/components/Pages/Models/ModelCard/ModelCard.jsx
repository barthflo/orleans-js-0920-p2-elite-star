import '../Models.css';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';

const ModelCard = ({ name, image , id}) => {
    let url = `/profile/${id}`;
    return (
        <div className="modelSection p-4">
            <Zoom>
            <div className="modelName">
                <Link to={url} ><h3>{name}</h3></Link>
            </div>
            </Zoom>
            <Slide bottom>
                <figure>
                    <div className="image-mask"></div>
                    <img className="image" src={image} alt={name} />
                </figure>
            </Slide>
            
        </div>
    )
}

export default ModelCard;