import './Results.css';
import { useLocation } from 'react-router-dom';
import { useState} from 'react';
import ModelCard  from '../../ModelCard';


const Results =() =>{
    const urlResults = useLocation().search;
    const results = {
        gender : useState(new URLSearchParams(urlResults).get('gender')),
        species : useState(new URLSearchParams(urlResults).get('species')),
        eyes : useState(new URLSearchParams(urlResults).get('eyes')),
        side: useState(new URLSearchParams(urlResults).get('side')),
    }
    const characters = JSON.parse(localStorage.getItem('characters'));
    return (
        <main className="Results d-flex justify-content-center align-items-center container">
            <h1>Results Page</h1>
            <p>{results.gender}{results.species}{results.eyes}{results.side}</p>
            {/* <ul>
                {characters.map(character => <li> {character.name} </li>)}
            </ul> */}
            <ModelCard {...characters[3]}/>
        </main>
        )
    }

export default Results;