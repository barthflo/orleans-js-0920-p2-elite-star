import React, { Component } from 'react';
import './ControlledCarousel.css';
import {Slide} from 'react-reveal';


class ControlledCarousel extends Component {
  render() {
    return (
      <section className="Intro m-0 p-0 w-100 container-fluid d-flex align-items-center">
        <div className='intro-mask'></div>
        <div className="d-flex flex-column justify-content-center align-items-center text-intro w-100">
          <Slide left>
            <h1 className="mb-4 text-center">WELCOME TO ELITE STAR AGENCY</h1>
          </Slide>
          <Slide right>
            <p className="col-12 col-sm-6 col-lg-4 text-center">Our agency offers you the best intergalactic models coming from different planets and with diverse and varied profiles for the world of fashion or cinema.</p>
          </Slide>
        </div>
      </section>
    )
  }
}

export default ControlledCarousel;
