import './Results.css';
import { useLocation } from 'react-router-dom';
import { useState} from 'react';
import ModelCard  from '../Models/ModelCard/ModelCard';


const Results =() =>{
    const urlResults = useLocation().search;
    const characters = JSON.parse(localStorage.getItem('characters'));
    const results = {
        gender : useState(new URLSearchParams(urlResults).get('gender')),
        species : useState(new URLSearchParams(urlResults).get('species')),
        height : useState(new URLSearchParams(urlResults).get('height')),
        side: useState(new URLSearchParams(urlResults).get('side')),
    }
    const filterGender = characters.filter(character => character.gender === results.gender[0] );
    const filterSpecies = characters.filter(character =>
        (results.species[0] === "others") ?
        character.species !== "human" && character.species !== "droid" && character.species !== "wookiee"
        :
        (character.species === results.species[0]));
    
    const renderSwitch =(param) =>{
        switch(param.height[0]){
            case '1':
                return characters.filter(character => character.height <1).map((character, index) => <ModelCard {...character} key={index} />);
            case '1.5':
                return characters.filter(character => character.height >=1 && character.height <=1.5).map((character, index) => <ModelCard {...character} key={index} />);            
            case '2':
                return characters.filter(character => character.height >1.5 && character.height <=2).map((character, index) => <ModelCard {...character} key={index} />);            
            case '3':
                return characters.filter(character => character.height >2 && character.height <=3).map((character, index) => <ModelCard {...character} key={index} />);            
            case '4':
                return characters.filter(character => character.height >3).map((character, index) => <ModelCard {...character} key={index} />);            
            default:
                console.log('default');
        }
    }
   
    characters.map(character => console.log(character.hairColor));
    // const mediumCharacters = characters.filter(character => character.height >=1.5 && character.height <2);
    // const tallCharacters = characters.filter(character => character.height >=2 && character.height <3);
    // const giantCharacters = characters.filter(character => character.height >=3);
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
            <div className="model">{results.gender && filterSpecies
                .sort((a,b)=> 0.5 -Math.random())
                .map((character, index) =>
                    <ModelCard {...character} key={index} />
                )}
            </div>
            <div className="model">{renderSwitch(results)}</div>
        </main>
        )
    }

export default Results;