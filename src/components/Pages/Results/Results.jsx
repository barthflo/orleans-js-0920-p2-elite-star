import './Results.css';
import { useLocation } from 'react-router-dom';
import ModelCard  from '../Models/ModelCard/ModelCard';
import {dark, light, characters} from '../../../App';


const Results =() =>{
    const urlResults = useLocation().search;

    const results =[
        new URLSearchParams(urlResults).get('gender'),
        new URLSearchParams(urlResults).get('species'),
        new URLSearchParams(urlResults).get('height'),
        new URLSearchParams(urlResults).get('side'),
    ]
    const capitalized = (word) => {
        return word[0].toUpperCase() + word.substring(1);
    }
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
                        .sort((a,b)=> a.name > b.name?1 : -1)
        if(filtered.length > 0){
            return filtered.map((character, index) => <ModelCard {...character} key={index}/> );
        }else{
            return  (
                <div className="no-results position-relative d-flex justify-content-center align-items-center w-100" style={{height:"50vh"}}>
                    
                    <h2 className="text-center">No results found for a {capitalized(array[0])} {capitalized(array[1])} {array[2] && `,size ${array[2]}m`} {array[3] && `, from the ${array[3]} side`} model...</h2>
                    <div className="no-results-bg w-100 h-100 position-absolute"></div>
                </div>
            )
        }

    }
    return (
        <main className="Results col-12 col-md-10 offset-md-1 px-0 py-md-5">
            {!urlResults ? <h1 className="px-2 px-md-0">Your results for all : </h1> : <h1>Your results :</h1> }
            <p className = "d-inline-flex justify-content-between w-100 mb-0">
                <ul className="list-unstyled d-flex justify-content-between w-100">
                    {results[0] && <li>Gender : {capitalized(results[0])}</li>}
                    {results[1] && <li>Species : {capitalized(results[1])}</li>}
                    {results[2] && <li>Height : {capitalized(results[2])}m</li>}
                    {results[3] && <li>Side : {capitalized(results[3])}</li>}
                </ul>
            </p>
            <div className="model">{!urlResults && characters
                .sort((a,b)=> a.name > b.name?1 : -1)
                .map((character, index) => 
                    <ModelCard {...character} key={index} />
                )}
                {filtering(results)}
            </div>
            
        </main>
        )
    }

export default Results;