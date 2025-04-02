import React from 'react'
import '../Css/Features.css'
import pizza from '../assets/About/pizza_icon.jpg'
import vegetable_bold from "../assets/About/vegetablebold.jpg"
import employee from "../assets/About/FastestDelivery_icon.png"

export const Features = () => {
  return (
    <div className="container-fluid" id="featured-3">
    
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature">
        <div className="feature-icon center mx-4" width="50%">
          <img src={pizza} className="bi pb-4" width="20%" height="100px"/>
        <h2 style={{color:"black",fontSize:"20px",fontStyle:"bold"}}>ORIGINAL</h2> 
        <p>Delicious Burger is modern fst food restuarant and it is very old restuarant .this restaurant
           start in 2000s and this delicious burger restuarant as completed 25th year.</p>
       
          </div>
      </div>
      <div className="feature col-fluid">
        <div className="feature-icon mx-4">
          <img src={vegetable_bold} className="bi pb-4" width="20%" height="100px"/>
        </div>
        <h2 style={{color:"black",fontSize:"20px",fontStyle:"bold"}} mx-4>QUALITY FOOD</h2>
        <p>Read reviews of Quality food group. Write and share your personal story. Your experience will help others make the right buying decision.

</p>
       
      </div>
      <div className="feature col-fluid">
        <div className="feature-icon mx-4">
          <img src={employee} className="bi pb-2" width="36%" height="100px"/>
        </div>
        <h2 style={{color:"black",fontSize:"20px",fontStyle:"Bold"}}>FASTEST DELIVERY</h2>
        <p>Helping You Save Time and Reduce Cost, Accelerate Your Business with UPS. Your Package Delivered Safely & on Time. Reliable Shipping with Peace of Mind!

</p>
       
      </div>
    </div>
  </div>

  )
}
