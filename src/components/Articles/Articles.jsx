import React from 'react';
import "./Articles.css";


function Articles() {

    const Simo = {
        image: "http://www.starwars-holonet.com/news/2019/2019-12-23-starwars-9-revue-de-presse-1.jpg",
        name: "Simo",
    }

    return (

        <div>
            <div className="d-flex justify-content-center p-5 bg-secondary text-white">
                <h2>Article de presse</h2>
            </div>
            <div className="card shadow p-3 mb-5 bg-white rounded" >

                <div>

                    <img className="card shadow card-img-top p-3" src={Simo.image} alt={Simo.name} />
                </div>

                <div className="card-body body-left p-3 col align-self-center">
                    <h3 className="col-md-4">Simo</h3>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.le film a l'intelligence de ne jamais lâcher un fil conducteur amorcé dès l'épisode VII : l'opposition singulière, en forme d'amour-haine, entre Rey et Kylo Ren. On vibre à chacun de leurs combats, à chaque tentative de rapprochement, magnifiés par les interprétations éblouissantes de Daisy Ridley et Adam Driver qui maîtrisent mieux que jamais leurs personnages au bout de trois films.
                </p>
                </div>
            </div>
        </div>
    )
}

export default Articles;
