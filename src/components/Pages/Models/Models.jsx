import ModelCard from './ModelCard/ModelCard';
import './Models.css';
import ToggleSide from '../ToggleSide/ToggleSide';
import {ToggleSideContext} from '../ToggleSide/ToggleSide';
import {useState} from 'react';
import {light, dark} from '../../../App';

const Models =() =>{
    const characters = JSON.parse(localStorage.getItem('characters'));
    const [activeTab, setActive] = useState("1");
    const toggleActive =(tab) => {
        activeTab !== tab && setActive(tab);  
    }
    const filtering = () => {
        let filtered=[];
        switch(activeTab){
            case "2":
                filtered = characters.filter(character => light.some(affiliation => character.affiliations.includes(affiliation))&& !dark.some(affiliation =>character.affiliations.includes(affiliation)));
                return filtered;
            case "3":
                filtered = characters.filter(character => dark.some(affiliation => character.affiliations.includes(affiliation)) && !light.some(affiliation =>character.affiliations.includes(affiliation)));
                return filtered;
            default:
                return characters;
        } 
    }
    return (
        <main className="models col-12 col-lg-10 offset-lg-1 px-0 py-md-5 px-md-4">
            <h1>Our Models</h1>
            <ToggleSideContext.Provider value={{activeTab:activeTab, toggleActive : toggleActive}}>
                <ToggleSide />
                <div className="model mt-5">
                    {filtering()
                        // .sort((a, b)=> 0.5 - Math.random())
                        .map((character, index) => <ModelCard {...character} index={index} key={index} />)
                    }
                </div>
            </ToggleSideContext.Provider>
        </main>
    )
}

export default Models;
