import {Fade} from 'react-reveal';
import {Link} from 'react-router-dom';

const ProfileDescription = ({params, model, prev, next, onClick, openForm}) => {
    const age = () => {
        if (model[0].died && model[0].born) {
            return (model[0].died - model[0].born) + " years old";
        } else {
            return null;
        }
    }
    return (
        <section className="description d-flex flex-column align-items-center flex-md-row align-items-md-stretch justify-content-md-start flex-md-row-reverse">
                <figure className=" ml-md-4" >
                    <img className="w-100 h-100"
                         src={model[0].image} 
                         alt={model[0].name}
                    />
                </figure>
                <Fade left duration={1500}>
                <ul className="w-100 col-11 col-md-4 offset-md-0 col-lg-6 mt-3 list-unstyled text-right d-flex flex-column justify-content-between align-items-end pr-md-3 pt-md-1 mt-md-0">
                    {age() &&
                        <li>
                            <h2>Age</h2>
                            <p>{age()}</p>
                        </li>
                    }
                    <li className="text-capitalize">
                        <h2>Gender</h2> 
                        <p>{model[0].gender}</p>
                    </li>
                    {model[0].height !== undefined && 
                        <li className="text-capitalize">
                            <h2>Height</h2>
                            <p>{model[0].height.toFixed(2)}m</p>  
                        </li>
                    }
                    {model[0].mass !== undefined && 
                        <li className="text-capitalize">
                            <h2>Weight</h2> 
                            <p>{model[0].mass}kg</p>
                        </li>
                    }
                    {model[0].eyeColor && 
                        <li className="text-capitalize">
                            <h2>Eyes</h2>
                            <p>{model[0].eyeColor}</p>
                        </li>
                    }
                    {model[0].hairColor && 
                        <li className="text-capitalize">
                            <h2>Hair</h2>
                            <p>{model[0].hairColor}</p>
                        </li>
                    }
                    {model[0].skinColor && 
                        <li className="text-capitalize">
                            <h2>Skin</h2>
                            <p>{model[0].skinColor}</p>
                        </li>
                    }
                    {model[0].homeworld && 
                        <li className="text-capitalize">
                            <h2>From</h2>
                            <p>{model[0].homeworld}</p>
                        </li>
                    }
                    {model[0].platingColor && 
                        <li className="text-capitalize">
                            <h2>Plating Color</h2>
                            <p>{model[0].platingColor}</p>
                    </li>
                    }
                    {model[0].sensorColor && 
                        <li className="text-capitalize">
                            <h2>Sensor Color</h2>
                            <p>{model[0].sensorColor}</p>
                        </li>
                    }
                    {model[0].affiliations && 
                        <li className="text-capitalize">
                            <h2>Affiliations</h2>
                            <p>{model[0].affiliations.map(affiliation => affiliation + ' ')}</p>
                        </li>
                    }
                    {model[0].cybernetics &&
                        <li className="text-capitalize">
                            <h2>Specificities</h2>
                            <p>{model[0].cybernetics}</p>
                        </li>
                    } 
                    
                    <li className="form-button-container">
                        <button onClick={()=>onClick(!openForm)}className="btn btn-dark btn-md-outline-dark mt-3 w-100" type="button">
                            <p className="text-uppercase text-normal">Contact {model[0].name}</p>
                        </button>  
                    </li>
                </ul>
                </Fade>
                {window.innerWidth >= 768 &&
                    <div className="d-flex flex-row-reverse">
                        <Link className="px-2 text-secondary" to={next(parseInt(params.id))}>Next</Link>
                        <Link className="pr-2 text-secondary"to={prev(parseInt(params.id))}>Prev</Link>
                    </div>
                }
            </section>
    )
}

export default ProfileDescription
