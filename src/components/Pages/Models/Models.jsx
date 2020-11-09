import ModelCard from './ModelCard/ModelCard';
import './Models.css';


const Models =() =>{
    const characters = JSON.parse(localStorage.getItem('characters'));
    
    return (
        <main className="models col-12 col-md-10 offset-md-1 px-0 py-md-5">
            <h1>Our Models</h1>
            
            <div className="model mt-5">
                {characters.sort((a, b)=> 0.5 - Math.random())
                           .map((character, index) => <ModelCard {...character} key={index} />)
                           .reverse()
                           }
            </div>
        </main>
    )
}

export default Models;
