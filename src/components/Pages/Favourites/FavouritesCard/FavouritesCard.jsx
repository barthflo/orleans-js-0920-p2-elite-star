import { useState, useContext } from 'react';
import './FavouritesCard.css';
import {Link} from 'react-router-dom';
import {dark, light, CharactersContext} from '../../../../App';
import {FaJediOrder, FaEmpire} from 'react-icons/fa';
import {BiArrowFromTop, BiArrowFromBottom} from 'react-icons/bi';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {Collapse} from 'reactstrap';
import {Fade} from 'react-reveal';


function FavouritesCard(props) {
    console.log(props);
    let url = `/profile/${props.id}`;
    const lightside = light.some(affiliation => props.affiliations.includes(affiliation)) && !dark.some(affiliation => props.affiliations.includes(affiliation));
    const [isOpen, setIsOpen] =useState(false);
    const toggleCard = () => setIsOpen(!isOpen);
    const age = () => {
        if (props.died && props.born) {
            return (props.died - props.born) + " years old";
        } else {
            return null;
        }
    }
    const {toggleFavourite} = useContext(CharactersContext);

    return (
        <div className="Favourites-card card mb-4">
            <Fade bottom cascade duration={1000}>
            <div className="card-header d-flex flex-wrap flex-sm-nowrap justify-content-betwwen">
                <div className="resume d-flex flex-column justify-content-between">
                    <div className="d-flex flex-row-reverse justify-content-end">
                        {lightside ? <FaJediOrder size={"1.5em"}/> : <FaEmpire size={"1.5em"}/>}
                        <h3 className="pr-2 mb-1"><Link to={url}>{props.name}</Link></h3>
                    </div>
                    <div >
                        <p className="text-capitalize mb-1">{props.gender}</p>
                        <p className="text-capitalize mb-1">{props.species}</p>
                        <p className="mb-1">{props.height.toFixed(2)}m</p>
                        {props.mass && 
                            <p className="text-capitalize mb-2 mb-sm-0">{props.mass}kg</p>
                        }
                    </div>
                </div>
                <figure>
                    <img className="w-100 h-100"
                         src={props.image} 
                         alt={props.name}
                    />
                </figure>
                {isOpen ?
                <BiArrowFromBottom onClick={toggleCard} size={"1em"} className="expand position-absolute" />
                :
                <BiArrowFromTop onClick={toggleCard} size={"1em"} className="expand position-absolute"/>
                }
            </div>
            </Fade>
            <Collapse isOpen={isOpen}>
                <div className="card-body pb-2 d-flex flex-column justify-content-between">
                    <div className="d-flex flex-wrap justify-content-between">
                        {age() &&
                        <p className="text-capitalize">{age()}</p>
                        }
                        <p className="text-capitalize">Eyes: {props.eyeColor}</p>
                        {props.hairColor &&
                        <p className="text-capitalize">Hairs: {props.hairColor}</p>
                        }
                        {props.skinColor && 
                        <p className="text-capitalize">Skin: {props.skinColor}</p>
                        }
                        {props.platingColor && 
                        <p className="text-capitalize">Skin: {props.platingColor}</p>
                        }
                        {props.cybernetics && 
                        <p className="text-capitalize">Specials: {props.cybernetics}</p>
                        }  
                    </div>
                    <div className="d-flex flex-column flex-sm-row justify-content-sm-between flex-wrap">
                        <button onClick={() => toggleFavourite(props.id)} className="remove-btn btn btn-dark m-0 d-flex align-items-center mt-3" style={{background:"var(--color-warm)"}}>
                            <RiDeleteBin6Line/>
                            <p className="m-0 pl-2 text-uppercase" style={{ color: "var(--light)"}}>Remove</p>
                        </button>
                    </div>
                </div>
            </Collapse>
        </div>
    )
}

export default FavouritesCard

