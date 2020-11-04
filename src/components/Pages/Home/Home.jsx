import React from 'react';
import Articles from '../../Articles/Articles';
import './Home.css';

const Home = () => {
    return (
        <main className="home">
            <section className="Intro m-0 bg-dark w-100 container-fluid d-flex justify-content-center align-items-center" style={{width:"100vw", height:"100vh"}}>
                <h1 className="text-light">Welcome to Elite Star</h1>
            </section>
            <section className="col-12 container">
                <Articles />
            </section>
            <section className="Partners" id="partners">
                <h2>Partners</h2>
            </section>
        </main>
    )
}

export default Home;
