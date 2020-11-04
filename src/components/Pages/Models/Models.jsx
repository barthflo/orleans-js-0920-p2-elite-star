import { useState } from 'react';
import ModelCard from './ModelCard/ModelCard';
import './Models.css';


const Models =() =>{
    const [characters] = useState(JSON.parse(localStorage.getItem('characters')));
    console.log(characters);
    return (
        <main>
            <h1 className="models p-5">Our Models</h1>
            <div className="model mt-0 col-10 offset-1">
                {characters.sort((a, b)=> 0.5 - Math.random())
                           .map((character, index) => <ModelCard {...character} key={index} />)
                           .reverse()
                           }
            </div>
        </main>
    )
}

export default Models;
