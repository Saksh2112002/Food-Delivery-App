import React from 'react'
import '../Css/Adds.css'
const Adds = () => {
  return (
    <div className="container py-4">
    <div className="row align-items-md-stretch px-17">
      <div className="col-md-6 ">
        <div id='background_adds'className="h-100 p-5 text-black fw-bold ff-Arails rounded-3">
          <h2>GET YOUR FREE FRANCH FRIES</h2>
       
          <button className="btn btn-outline-light" type="button">Learn More</button>
        </div>
      </div>
      <div className="col-md-6">
        <div id='background_burger'className="h-100 p-5 rounded-3" width="50%">
         
          <h2 className="h mx-4">This Weekend 50% off on Spicy Delicious Burger.</h2>
      
          <button className="btn btn-outline-light" type="button">Learn More</button>
        </div>
      </div>
    </div>

    
  </div>
  )
}

export default Adds