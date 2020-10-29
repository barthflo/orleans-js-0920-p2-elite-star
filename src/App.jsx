import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Results from './components/Pages/Results/Results';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/> 
        <Route path="/results" component={Results}/> 
      </Switch>
    </div>
  );
}

export default App;