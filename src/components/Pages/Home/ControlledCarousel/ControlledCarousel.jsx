import React, { Component } from 'react';
import './ControlledCarousel.css';


class ControlledCarousel extends Component {
  render() {
    return (
      <section className="Intro m-0 w-100 container-fluid d-flex justify-content-center flex-column align-items-center">
        <div className='into-mask'></div>
        <h1 className="text-light">WELCOME TO ELITE STAR AGENCY</h1>
        <h3>Our agency offers you the best intergalactic models coming from different planets and with diverse and varied profiles for the world of fashion or cinema.</h3>
      </section>
    )
  }
}

export default ControlledCarousel;
