import '../Models.css';
import {Zoom, Slide} from 'react-reveal';
import { Link } from 'react-router-dom';

const ModelCard = ({ name, image , id}) => {
    let url = `/profile/${id}`;
    return (
        <div className="modelSection p-md-4">
            { (window.innerWidth >768) ? 
                <Zoom> 
                    <div className="modelName">
                        <Link to={url} ><h3>{name}</h3></Link>
                    </div>
                </Zoom>
                : 
                <Slide bottom>
                    <div className="modelName">
                        <Link to={url} ><h3>{name}</h3></Link>
                    </div>
                </Slide>
            }
            <Slide bottom>
                <Link to={url} >
                    <figure>
                        <div className="image-mask"></div>
                        <img className="image" src={image} alt={name} />
                    </figure>
                </Link>
            </Slide>
            
        </div>
    )
}

export default ModelCard;