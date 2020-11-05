import React, { Component } from 'react';
// import Agence from '../../../../Assets/agence_futur.jpg';
// import Jabba from '../../../../Assets/Jabba.jpg';
import './ControlledCarousel.css';


class ControlledCarousel extends Component {
  render() {
    return (
      //       <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      //   <div class="carousel-inner">
      //     <div class="carousel-item active">
      //       <img src="..." class="d-block w-100" alt="..."/>
      //     </div>
      //     <div class="carousel-item">
      //       <img src="..." class="d-block w-100" alt="..."/>
      //     </div>
      //     <div class="carousel-item">
      //       <img src="..." class="d-block w-100" alt="..."/>
      //     </div>
      //   </div>
      //   <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      //     <span class="sr-only">Previous</span>
      //   </a>
      //   <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
      //     <span class="sr-only">Next</span>
      //   </a>
      // </div> 
      <section className="Intro m-0 w-100 container-fluid d-flex justify-content-center flex-column align-items-center">
        <div className='into-mask'></div>
        <h1 className="text-light">WELCOME TO ELITE STAR AGENCY</h1>
        <h3>Our agency offers you the best intergalactic models coming from different planets and with diverse and varied profiles for the world of fashion or cinema.</h3>
      </section>
    )
  }
}

export default ControlledCarousel;


{/* <h3>Our agency offers you the best intergalactic models coming from different planets and with diverse and varied profiles for the world of fashion or cinema.</h3> */ }
// ELCOME TO ELITE STAR AGENCY