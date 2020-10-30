import './App.css';
import Header from './components/Header/Header';
import Home from "./components/Pages/Home/Home";
import Models from "./components/Pages/Models/Models";
import About from "./components/Pages/About/About";
import Results from './components/Pages/Results/Results';
import Footer from "./components/Footer/Footer";
import { Switch, Route } from 'react-router-dom';
// import Favorites from "./components/Header/Favorites/Favorites";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/models" component={Models} />
        <Route path="/about" component={About} />
        <Route path="/results" component={Results}/>
        {/* <Route path="/favorites" component={Favorites} /> */}
      </Switch>

      <Header />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
