import Articles from '../../Articles/Articles';
import './Home.css';




function Home() {
    return (
        <div className="home">
            <div className="m-0 Intro jumbotron bg-dark w-100 container-fluid d-flex justify-content-center align-items-center" style={{width:"100vw", height:"100vh"}}>
                <h1 className="text-light">Welcome to Elite Star</h1>
            </div>
            <div className="col-12 container">
                <Articles />
            </div>
        </div>
    )
}

export default Home;
