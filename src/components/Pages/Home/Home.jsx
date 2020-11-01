import React from 'react';
import './Home.css';
import Articles from '../../Articles/Articles';
import Intro from './Intro/Intro';


function Home() {
    return (
        <div className="home">
            <h2>Page Home</h2>
            <Intro />
            <Articles />
        </div>
    )
}

export default Home;
