import './FavouritesPage.css';
import {CharactersContext} from '../../../App';
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import FavouritesCard from './FavouritesCard/FavouritesCard';

const FavouritesPage = () => {
    const {characters } = useContext(CharactersContext);
    let favourites = characters.filter(character => character.isFavourite && character.isFavourite);
    return (
        <main className="Favourites-page col-12 col-lg-10 offset-lg-1 px-0 py-md-5 px-md-4">
            <h2>My Favourites </h2>
            {favourites.length === 0 ?
                <section className="w-100 d-flex flex-column justify-content-center align-items-center" 
                     style={{height:"80vh"}}
                >
                    <h3 className="mb-4 text-center">You haven't added any favourites yet!</h3>
                    <Link to='/models' className="btn btn-dark">
                        <p className="text-uppercase mb-0">Browse The Models</p>
                    </Link>
                </section>
            :
                <section className="col-12 mb-4 p-md-0">
                    
                    {characters.map(character => character.isFavourite && <FavouritesCard key={character.id} {...character}/>)}
                    
                    <Link to='/models' className="btn btn-dark mt-4">
                        <p className="text-uppercase mb-0">Browse More Models...</p>
                    </Link>
                    
                </section>  
            }
        </main>
    )
}

export default FavouritesPage;