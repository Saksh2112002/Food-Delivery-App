import React from 'react';
import '../Css/SliderHome.css';
import customer_burger from '../assets/Home/customer_burgerlogo.jpg'
import customer_burgerfun from '../assets/Home/view_customer_burger.jpg'
import customer_burgerlogo2 from '../assets/Home/customer_burgerlogo2.jpg'
const Slider_Home = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
    </div>
    <div id='background_Slider' className="carousel-inner">
      <div className="carousel-item">
        <svg className="bd-placeholder-img" width="100%" height="400px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" opacity="0.8"></rect></svg>

        <div className="container">
          <div className="carousel-caption text-start">
            <img src={customer_burger} className="burgercustomer1 mt-7" width="auto" height="80px"></img>
          
            <p style={{fontSize:"15px",color:"white"}}>The Crispy Veg Burger from Jumboking was really good. It was 
              served with fries and a 300 Ml Coke which was great! The flavors were delicious and it was
              filling.and he Crispy Veg Burger from Jumboking was really good. It was served with fries 
              and a 300 Ml Coke which was great! The flavors were delicious and it was filling. Highly 
              recommended!</p>
           <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <h6 style={{color:"white"}}>By Dinesh Kumar</h6>
          </div>
        </div>
      </div>
      <div className="carousel-item active">
        <svg className="bd-placeholder-img" width="100%" height="400px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" opacity="0.8"></rect></svg>

        <div className="container">
          <div className="carousel-caption">
            <img src={customer_burgerfun} width="auto" height="80px"></img>
           
            <p style={{fontSize:"15px",color:"white"}}>The Chicken tikka burger even though expensive is a real treat. This burger looks smaller than the whoopers and costlier but worth it. the one item very cheap here is Vanilla ice cream cone at rs.7.and I tried Jumboking's Indian Burger and it was amazing! The Spicy Mexican Burger was full of flavor and the fries were cooked perfectly. To top it off, the 300 ml Coke was the perfect accompaniment. Highly recommended!</p>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
           <h6 style={{color:"white"}}>By Anaya Singh</h6>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <svg className="bd-placeholder-img" width="100%" height="400px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" opacity="0.8"></rect></svg>

        <div className="container">
          <div className="carousel-caption text-end">
            <img src={customer_burgerlogo2} width="auto" height="80px"></img>
            
            <p style={{fontSize:"15px",color:"white"}}>This is one of the best burgers in Athens, Whatever we had, starters,
             salads,burgers were amazing. I'm still thinking of the chips with cheddar
             and bacon sauce. All the dishes we had were very very good.Try it for sure and Loved the quality of service, safety precautions, taste, and price, promotions, & discounts at this place</p>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
           <h6 style={{color:"white"}}> By Nisha jaslwal</h6>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Slider_Home