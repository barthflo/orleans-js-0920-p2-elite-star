import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Models from './components/Models';
import {Switch, Route} from 'react-router-dom';
import ProfilPage from './components/ProfilPage';

function App() {
  return (
    <main >
      <div>
        <Models/>
        <Switch>
          <Route path="/ProfilPage" component={ProfilPage}/>
        </Switch>
      </div>
    </main>
  )
};

export default App;