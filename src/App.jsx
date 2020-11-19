import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, createContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';
import Header from './components/Header/Header';
import Home from "./components/Pages/Home/Home";
import Models from "./components/Pages/Models/Models";
import About from "./components/Pages/About/About";
import Results from "./components/Pages/Results/Results";
import Footer from "./components/Footer/Footer"; 
import FavouritesPage from "./components/Pages/Favourites/FavouritesPage";
import Profile from './components/Pages/Profile/Profile';

export const dark = [
  "501st Legion",
  "Bounty Hunters' Guild",
  "Dark Empire",
  "Boba Fett's syndicate",
  "Death Watch",
  "Shadow Collective", 
  "Hutt Clan",
  "House Palpatine",
  "Watto's Shop",
  "Nightbrothers",
  "Stalgasin hive",
  "House of Dooku",
  "Techno Union",
  "First Order",
  "Separatist Droid Army",
  "Imperial High Command",
  "Sullust Sector Spacefarers Academy",
  "Judicial Forces",
  "Imperial Officer Corps",
  "Battle Station Command"
]
export const light = [
  "Alliance to Restore the Republic", 
  "Red Squadron", 
  "Jedi Order", 
  "Rogue Squadron", 
  "Resistance",
  "Jedi High Council",
  "Jedi assault team",
  "Mace Windu's squad",
  "Leia Ogana's team",
  "Elder Houses",
  "Lars Family",
  "Bright Tree Tribe",
  "Gungan High Council",
  "Gungan Grand Army",
  "Royal House of Naboo",
]

export const CharactersContext = createContext(null);
export const characters = JSON.parse(localStorage.getItem('characters'));
const App = () => {
  const [characters, setCharacters] = useState(JSON.parse(localStorage.getItem('characters')));
  useEffect(() => {
    fetch("https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json")
    .then(res => res.json())
    .then(res => res.filter(data => data.id !== 77))
    .then(res => res.map((item) => ({...item, isFavourite : false})))
    .then(res => setCharacters(res))
  }, [])

  localStorage.setItem('characters', JSON.stringify(characters));
 
  const [favourites, setFavourites] = useState(characters.map(character => character.isFavourite))
  const toggleFavourite = (id) => {
    characters.map(character =>
      (character.id === id) &&
        (character.isFavourite = !character.isFavourite)
    )
    setFavourites(!favourites);
    setCharacters(characters);
    localStorage.setItem('characters', JSON.stringify(characters));
  }
  return (
    <div className="App">
      <Header />
      <CharactersContext.Provider value={{ characters , toggleFavourite }}>
        <Route render={({location})=>(
          <SlideRoutes location={location} duration={1000} timing={"ease-in-out"}>
              <Route exact path="/" component={Home}/>
                <Route path="/models" component={Models} />
              
              <Route path="/about" component={About} />
              <Route path="/results" component={Results} />
              <Route path="/my-list" component={FavouritesPage} />
          </SlideRoutes>
        )} />
        <Switch>
          <Route path="/profile/:id" component={Profile}/>
        </Switch>
      </CharactersContext.Provider>
      <Footer />
    </div>
  );
}
export default App;
