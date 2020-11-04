import './Results.css';
import { useLocation } from 'react-router-dom';
import { useState} from 'react';
import ModelCard  from '../Models/ModelCard/ModelCard';


const Results =() =>{
    const urlResults = useLocation().search;
    const [characters] = useState(JSON.parse(localStorage.getItem('characters')));
    const results = {
        gender : useState(new URLSearchParams(urlResults).get('gender')),
        species : useState(new URLSearchParams(urlResults).get('species')),
        eyes : useState(new URLSearchParams(urlResults).get('eyes')),
        side: useState(new URLSearchParams(urlResults).get('side')),
    }
    const filterGender = characters.filter(character => character.gender === results.gender[0]);
    const filterSpecies = characters.filter(character => character.species === results.species[0]);
    const filterEyes = characters.filter(character => character.eyeColor === results.eyes[0]);

    console.log(filterSpecies);
    return (
        <main className="Results models">
            <h1 className="text-center">Results Page</h1>
            <p className="text-center">{results.gender}/{results.species}/{results.eyes}/{results.side}</p>
            <div className="model">{!urlResults && characters
                .sort((a,b)=> a.name > b.name?1 : -1)
                .map((character, index) => 
                    <ModelCard {...character} key={index} />
                )}
            </div>
            <div className="model">{results.gender && filterGender
                .sort((a,b)=> a.name > b.name?1 : -1)
                .map((character, index) =>
                    <ModelCard {...character} key={index} />
                )}
            </div>
            <div>{results.gender && filterSpecies
                .sort((a,b)=> a.name > b.name?1 : -1)
                .map((character, index) =>
                    <ModelCard {...character} key={index} />
                )}
            </div> 
            <div>{results.eyes && filterEyes
                .sort((a,b)=> a.name > b.name?1 : -1)
                .map((character, index) =>
                    <ModelCard {...character} key={index} />
                )}
            </div>  
        </main>
        )
    }

export default Results;