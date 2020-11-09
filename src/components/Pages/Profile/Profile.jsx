import React from 'react'

function Profile(props) {
    const params = props.match.params;
    const characters = JSON.parse(localStorage.getItem('characters'));
    const model = [];
    characters.forEach(character => character.id.toString() === params.id && model.push(character));
    console.log(model[0]);
    const age =() => {
        console.log(model[0].died);
        if(model[0].died && model[0].born){
            return (model[0].died - model[0].born) + " years old";
        }else{
            return "Not available";
        }
        
    }
    return (
        <main className="about col-12 col-md-10 offset-md-1 px-0 py-md-5">
            <h1 style={{background:"var(--secondary-color"}}>{model[0].name}</h1>
            <figure style={{height:"60vh", width:"100%"}}>
                <img className="w-100 h-100" style={{objectFit:"cover"}} src={model[0].image} alt={model[0].name}/>
            </figure>
            <ul>
                <li>Model Age : {age()}</li>
                <li className="text-capitalize">Model Gender: {model[0].gender}</li>
                {model[0].height !== undefined && <li className="text-capitalize">Model Height: {model[0].height.toFixed(2)}m</li>}
                {model[0].mass !== undefined && <li className="text-capitalize">Model Weight: {model[0].mass}kg</li>}
                {model[0].species && <li className="text-capitalize">Model Species: {model[0].species}</li>}
                {model[0].eyeColor && <li className="text-capitalize">Model Eyes: {model[0].eyeColor}</li>}
                {model[0].hairColor && <li className="text-capitalize">Model Hair: {model[0].hairColor}</li>}
                {model[0].skinColor && <li className="text-capitalize">Model Skin: {model[0].skinColor}</li>}
                {model[0].cybernetics || model[0].platingColor ?<li className="text-capitalize">Model Speficities: 
                    <ul>
                        {model[0].cybernetics && <li className="text-capitalize">{model[0].cybernetics}</li>}
                        {model[0].platingColor && <li className="text-capitalize">Plating Color :{model[0].platingColor}</li>}
                        {model[0].sensorColor && <li className="text-capitalize">Sensor Color :{model[0].sensorColor}</li>}  
                    </ul>
                </li>
                : <> </>}
                {model[0].homeworld && <li className="text-capitalize">Model From : {model[0].homeworld}</li>}
            </ul>
        </main>
    )
}

export default Profile;
