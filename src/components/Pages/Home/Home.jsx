import React from 'react';
import Articles from '../../Articles/Articles';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="Intro m-0 bg-dark w-100 container-fluid d-flex justify-content-center align-items-center" style={{width:"100vw", height:"100vh"}}>
                <h1 className="text-light">Welcome to Elite Star</h1>
            </div>
            <div className="col-12 container">
                <Articles />
            </div>
            <div className="Partners" id="partners">
                <h2>Partners</h2>
            </div>
        </div>
    )
}

export default Home;
