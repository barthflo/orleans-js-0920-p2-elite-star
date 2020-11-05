import React from 'react';
import Articles from '../../Articles/Articles';
import './Home.css';
import WeekSelection from '../../WeekSelection/WeekSelection';


const Home = () => {
    return (
        <main className="home">
            <h2>Page Home</h2>
            <div className="m-0 Intro jumbotron bg-dark w-100 container-fluid d-flex justify-content-center align-items-center" style={{ width: "100vw", height: "100vh" }}>
                <h1 className="text-light">Welcome to Elite Star</h1>
            </div>
            <WeekSelection/>
            <div className="col-12 container">
                <Articles />
            <section className="Partners" id="partners">
                <h2>Partners</h2>
            </section>
            </div>
        </main>
    )
}

export default Home;
