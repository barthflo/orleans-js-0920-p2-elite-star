import Articles from '../../Articles/Articles';
import ControlledCarousel from './ControlledCarousel/ControlledCarousel';
import './Home.css';




function Home() {
    return (
        <main className="home">
             <ControlledCarousel  className="m-0 Intro jumbotron  w-100 container-fluid d-flex justify-content-center align-items-center" style={{width:"100vw", height:"100vh"}} />
             <div className="col-12 container">
                <Articles />
             </div>
        </main>
    )
}

export default Home;

