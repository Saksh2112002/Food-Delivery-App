import React from 'react'
import '../Css/Footer.css'
const Footer = () => {
  return (
    <div className="container-fliud px-5 py-6 bg-white" id="icon-grid">
   

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-1 py-5">
      <div className="col d-flex align-items-start">
  
        <div>
          <h4 className="fw-bold mb-3 text-black text-center">LOCATION</h4>
          <p className="write">Evershine City, Vasai(e),<br></br>
          Mumbai,India.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
   
        <div>
          <h4 className="fw-bold  mb-3 text-black text-center">WORKING HOURS</h4>
          <p className="write mb-0">Mon-Fri 9:00AM To 10:00PM</p>
       <p className="write mb-0">Satursday 6:00PM To 9:00PM</p>
       <p className="write mb-0">Sunday 4:00PM To 9:00PM</p>
       
        </div>
      </div>
      <div className="col d-flex align-items-start">
   
        <div>
          <h4 className="fw-bold mb-2 text-black text-center">ORDER NOW</h4>
          <p className="write mb-0 pt-1">order now on this number.</p>
          <p className="write mb-0 pb-4 fw-bold fs-5 text-center"style={{color:"gold"}}>999-888-7777</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
   
        <div>
          <h4 className="fw-bold mb-3 text-start text-black">FOLLOW US</h4>
          <p className="write mb-4">follow us on this</p>
          <i className="bi bi-facebook mx-4 pt-4"style={{color:"black"}}></i>
          <i className="bi bi-twitter" style={{color:"black"}}></i>
          <i className="bi bi-instagram mx-4" style={{color:"black"}}></i>
          <i className="bi bi-youtube" style={{color:"black"}}></i>
        </div>
      </div>
    
      
    </div>
  
  </div>
  )
}

export default Footer