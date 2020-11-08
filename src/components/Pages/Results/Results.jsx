import './Results.css';
import { useLocation } from 'react-router-dom';
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
    const results =[
        new URLSearchParams(urlResults).get('gender'),
        new URLSearchParams(urlResults).get('species'),
        new URLSearchParams(urlResults).get('height'),
        new URLSearchParams(urlResults).get('side'),
    ]
    const filterSpecies = (object, array) => {
        switch(array[1]){
            case "human":
                return object.species === "human";
            case "droid":
                return object.species ==="droid";
            case "wookiee":
                return object.species === "wookiee";
            case "others":
                return object.species !=="human" && object.species !== "droid" && object.species !=="wookiee";
            default :
                return object.species;
            }
        }
    const filterHeight = (object, array) => {
        switch (array[2]){
            case "1":
                return object.height < 1;
            case"1.5":
                return object.height >=1 && object.height <= 1.5;
            case "2":
                return object.height > 1.5 && object.height <=2;
            case "3":
                return object.height >2 && object.height <=3;
            case "4":
                return object.height >3;
        default:
            return object.height;
        }
    }
    const filterSide = (object, array) =>{
        switch (array[3]){
            case "Republic":
                return light.some(affiliation => object.affiliations.includes(affiliation));
            case "Empire":
                return dark.some(affiliation => object.affiliations.includes(affiliation)) 
                && !light.some(affiliation =>object.affiliations.includes(affiliation));
            default :
                return object;
        }
    }
    const filtering = (array) => {
        const filtered = characters.filter(character => filterSpecies(character, array))
                        .filter(character => (array[0]) ? character.gender === array[0] : character.gender)
                        .filter(character => filterHeight(character, array))
                        .filter(character => filterSide(character, array))
        if(filtered.length > 0){
            return filtered.map( character => <h2>{character.name} - {character.gender} - {character.species} - {character.height} </h2>);
        }else{
            return <h2>No results</h2>
        }

    }
    return (
        <main className="Results models">
            <h1 className="text-center">{urlResults}</h1>
            <p className="text-center">{results.gender}/{results.species}/{results.eyes}/{results.side}</p>
            <div className="model">{!urlResults && characters
                .sort((a,b)=> a.name > b.name?1 : -1)
                .map((character, index) => 
                    <ModelCard {...character} key={index} />
                )}
            </div>
            {filtering(results)}
        </main>
        )
    }

export default Results;