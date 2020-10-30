import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGalacticSenate } from 'react-icons/fa';
import { GiLightSabers } from 'react-icons/gi';
import Articles from './components/Articles/Articles'; 


function App() {
  return (
    <main className="container d-flex flex-column justify-content-center align-items-center">
    
      <Articles />
    </main>
  )
};

export default App;