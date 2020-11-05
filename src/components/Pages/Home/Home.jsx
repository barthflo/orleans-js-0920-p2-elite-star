import React from 'react';
import Articles from '../../Articles/Articles';
import ControlledCarousel from './ControlledCarousel/ControlledCarousel';
import './Home.css';
import WeekSelection from '../../WeekSelection/WeekSelection';


const Home = () => {
    return (
        <main className="home">
             <ControlledCarousel />
            <div className="col-12 container">
                <WeekSelection/>
                <Articles />
                <section className="Partners" id="partners">
                    <h2>Partners</h2>
                </section>
            </div>
        </main>
    )
}

export default Home;

