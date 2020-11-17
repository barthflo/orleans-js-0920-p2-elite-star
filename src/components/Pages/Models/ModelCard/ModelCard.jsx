import '../Models.css';
import {Zoom, Slide} from 'react-reveal';
import { Link } from 'react-router-dom';
import {RiHeartAddFill} from 'react-icons/ri';
import {useContext} from 'react';
import {FavouriteContext, characters} from '../../../../App';

const ModelCard = ({ name, image , id, index, isFavourite}) => {
    const {favourites, toggleFavourite} = useContext(FavouriteContext);
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
                
                    <figure>
                        <RiHeartAddFill onClick={() => toggleFavourite(index)} className={"favourite-icon m-3 m-md-2 position-absolute" + (characters[index].isFavourite ? " is-favourite" : '')} size={"1.7em"} />
                        
                        <div className="image-mask"></div>
                        <Link to={url} >
                        <img className="image" src={image} alt={name} />
                        </Link>
                    </figure>
                
            </Slide>
            
        </div>
    )
}

export default ModelCard;