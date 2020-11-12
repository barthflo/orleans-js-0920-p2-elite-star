import React from 'react'
import Reviews from './Reviews';

function Profile(props) {
    const params = props.match.params;
    const characters = JSON.parse(localStorage.getItem('characters'));
    const model = [];
    characters.forEach(character => character.id.toString() === params.id && model.push(character));
    console.log(model[0]);
    const age = () => {
        console.log(model[0].died);
        if (model[0].died && model[0].born) {
            return (model[0].died - model[0].born) + " years old";
        } else {
            return "Not available";
        }

    }
    return (
        <main >
            <div className="about d-flex justify-content-center align-items-center">
                <h2>Page Profile</h2>
                <ul>
                    <li>Model Name : {model[0].name}</li>
                    <li>Model Age : {age()}</li>
                    <li className="text-capitalize">Model Gender: {model[0].gender}</li>
                    {model[0].height !== undefined && <li className="text-capitalize">Model Height: {model[0].height.toFixed(2)}m</li>}
                    {model[0].mass !== undefined && <li className="text-capitalize">Model Weight: {model[0].mass}kg</li>}
                    {model[0].species && <li className="text-capitalize">Model Species: {model[0].species}</li>}
                    {model[0].eyeColor && <li className="text-capitalize">Model Eyes: {model[0].eyeColor}</li>}
                    {model[0].hairColor && <li className="text-capitalize">Model Hair: {model[0].hairColor}</li>}
                    {model[0].skinColor && <li className="text-capitalize">Model Skin: {model[0].skinColor}</li>}
                    {model[0].cybernetics || model[0].platingColor ? <li className="text-capitalize">Model Speficities:
                    <ul>
                            {model[0].cybernetics && <li className="text-capitalize">{model[0].cybernetics}</li>}
                            {model[0].platingColor && <li className="text-capitalize">Plating Color :{model[0].platingColor}</li>}
                            {model[0].sensorColor && <li className="text-capitalize">Sensor Color :{model[0].sensorColor}</li>}
                        </ul>
                    </li>
                        : <> </>}
                    {model[0].homeworld && <li className="text-capitalize">Model From : {model[0].homeworld}</li>}
                </ul>
                <figure style={{ width: "400px", height: "400px" }}>
                    <img className="w-100 h-100" style={{ objectFit: "contain" }} src={model[0].image} alt={model[0].name} />
                </figure>
            </div>
                <h3>Reviews</h3>
                <Reviews />
        </main>


    )
}

export default Profile;
