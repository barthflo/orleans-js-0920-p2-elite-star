import React, { Component } from 'react';
import './ControlledCarousel.css';


class ControlledCarousel extends Component {
  render() {
    return (
      <section className="Intro m-0 p-0 w-100 container-fluid d-flex align-items-center">
        <div className='intro-mask'></div>
        <div className="d-flex flex-column justify-content-center align-items-center text-intro w-100">
          <h1 className="mb-4 p-5 text-center">WELCOME TO ELITE STAR AGENCY</h1>
          <p className="col-12 col-sm-6 col-lg-4 text-center">Our agency offers you the best intergalactic models coming from different planets and with diverse and varied profiles for the world of fashion or cinema.</p>
        </div>
      </section>
    )
  }
}

export default ControlledCarousel;
