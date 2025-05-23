import React from 'react'
import brandbanch1 from '../assets/Brands/Burger-Vector-Design-Logo-Graphics-35424623-1_1.png';
import brandsbanch2 from '../assets/Brands/Burger-Vector-Design-Logo-Graphics-35424623-1_2.png';
import brandsbranch3 from '../assets/Brands/Burger-Vector-Design-Logo-Graphics-35424623-1_34.png';


const Brandsslider = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={brandbanch1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={brandsbanch2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={brandsbranch3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  )
}

export default Brandsslider