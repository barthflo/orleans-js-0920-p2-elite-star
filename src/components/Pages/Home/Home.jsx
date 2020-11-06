import React from 'react';
import Articles from '../../Articles/Articles';
import ControlledCarousel from './ControlledCarousel/ControlledCarousel';
import './Home.css';
import WeekSelection from '../../WeekSelection/WeekSelection';
import Partners from './Partners/Partners';


const Home = () => {
    return (
        <main className="home">
            <ControlledCarousel />
            <WeekSelection/>
            <Articles />
            <Partners />
        </main>
    )
}

export default Home;

