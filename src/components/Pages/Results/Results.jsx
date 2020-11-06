import './Results.css';
import { useLocation } from 'react-router-dom';
import { useState} from 'react';
import ModelCard  from '../Models/ModelCard/ModelCard';


const Results =() =>{
    const urlResults = useLocation().search;
    const characters = JSON.parse(localStorage.getItem('characters'));
    const light = [
        "Alliance to Restore the Republic", 
        "Red Squadron", 
        "Jedi Order", 
        "Rogue Squadron", 
        "Resistance",
        "Jedi High Council",
        "Jedi assault team",
        "Mace Windu's squad",
        "Leia Ogana's team",
        "Elder Houses",
        "Lars Family",
        "Bright Tree Tribe",
        "Gungan High Council",
        "Gungan Grand Army",
        "Royal House of Naboo",
    ]
    const dark = [
        "501st Legion",
        "Bounty Hunters' Guild",
        "Dark Empire",
        "Boba Fett's syndicate",
        "Death Watch",
        "Shadow Collective", 
        "Hutt Clan",
        "House Palpatine",
        "Watto's Shop",
        "Nightbrothers",
        "Stalgasin hive",
        "House of Dooku",
        "Techno Union",
        "First Order"
    ]
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
    
    const filterHeight =(param) =>{
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
                break;
        }
    }
    const filterSide = (param) => {
        switch(param.side[0]){
            case 'Republic':
                const lightSide = characters.map(character =>(light.some(affiliation => character.affiliations.includes(affiliation))
                    &&
                    !dark.some(affiliation => character.affiliations.includes(affiliation)))
                    && <ModelCard {...character}/>);
                return lightSide;
            case 'Empire':
                const darkSide = characters.map(character =>(dark.some(affiliation => character.affiliations.includes(affiliation)) 
                    && 
                    !light.some(affiliation => character.affiliations.includes(affiliation)))
                    && 
                    <ModelCard {...character}/>);
                return darkSide;
            case 'All':
                const neutral = characters.map(character =>(!dark.some(affiliation => character.affiliations.includes(affiliation)) 
                    ||
                    !light.some(affiliation => character.affiliations.includes(affiliation)))
                    && 
                    <ModelCard {...character}/>);
                return neutral;
            default :
                break;
        }
    }
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
            <div className="model">{filterHeight(results)}</div>
            <div className="model">{filterSide(results)}</div>
        </main>
        )
    }

export default Results;