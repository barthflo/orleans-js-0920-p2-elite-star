import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGalacticSenate } from 'react-icons/fa';
import { GiLightSabers } from 'react-icons/gi';

function App() {
  return (
    <main className="container d-flex flex-column justify-content-center align-items-center">
      <h1>Hello EliteStar !</h1>
      <p>Let&apos;s start coding!</p>
      <div>
        <FaGalacticSenate className="icon color-cold" />
        <GiLightSabers className="icon color-warm" />
      </div>
    </main>
  )
};

export default App;