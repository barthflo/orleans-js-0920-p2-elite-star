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
export const characters = JSON.parse(localStorage.getItem('characters')).map(character => ({ ...character, isFavourite : false}));
export const FavouriteContext = createContext(null);

const App = () => {
  const [favourites, setFavourites] = useState(characters);
  useEffect(() => {
    fetch("https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json")
    .then(res => res.json())
    .then(res => res.filter(data => data.id !== 77))
    .then(res => localStorage.setItem('characters', JSON.stringify(res)))
  }, [])
  const toggleFavourite = (index) => {
    let arrayCopy = [favourites];
    (arrayCopy[0][index].isFavourite)
        ? (arrayCopy[0][index].isFavourite = false)
        : (arrayCopy[0][index].isFavourite = true );
    setFavourites([...favourites, arrayCopy]);
  }
  return (
    <div className="App">
      <Header />
      <FavouriteContext.Provider value={{ favourites: favourites, toggleFavourite: toggleFavourite}}>
        <Route render={({location})=>(
          <SlideRoutes location={location} duration={1000} timing={"ease-in-out"}>
              <Route exact path="/" component={Home}/>
                <Route path="/models" component={Models} />
              
              <Route path="/about" component={About} />
              <Route path="/results" component={Results} />
              <Route path="/my-list" component={FavouritesPage} />
          </SlideRoutes>
        )} />
        </FavouriteContext.Provider>
        <Switch>
          <Route path="/profile/:id" component={Profile}/>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
