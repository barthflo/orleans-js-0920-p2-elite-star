import ModelCard from './ModelCard/ModelCard';
import './Models.css';


const Models =() =>{
    const characters = JSON.parse(localStorage.getItem('characters'));
    
    return (
        <main className="models p-5">
            <h1>Our Models</h1>
            
            <div className="model mt-0 col-10 offset-1">
                {characters.sort((a, b)=> 0.5 - Math.random()).slice(0,3)
                           .map((character, index) => <ModelCard {...character} key={index} />)
                           .reverse()
                           }
            </div>
        </main>
    )
}

export default Models;
