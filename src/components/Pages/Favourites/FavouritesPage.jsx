import './FavouritesPage.css';
import {CharactersContext} from '../../../App';
import {useContext} from 'react';

const FavouritesPage = () => {
    const {characters } = useContext(CharactersContext);
    console.log(characters);
    return (
        <main className="Favourites-page d-flex justify-content-center align-items-center">
            <h2>Page Favourites </h2>
            <ul>
            {characters.map(character => character.isFavourite && <li>{character.name}</li>)}
            </ul>
        </main>
    )
}

export default FavouritesPage;