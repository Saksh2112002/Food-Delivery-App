import React from 'react'
import '../Css/Hero.css'

import burger from '../assets/Hero/burgertag.png'
import yellowredtag from '../assets/Hero/redyellowtag.png'



const Hero = () => {
  return (
    <>
    <div id='background' className="col-xxl-8 container-fluid px-4 py-5">
    <div className="flex-lg-row-reverse g-5 row align-items-center py-5">
      <div className="col-10 col-lg-6 col-sm-8">
      <img src={yellowredtag} className="tag" style={{borderRadius:"100%",position:"relative",marginTop:"10px",marginLeft:"40px"}}></img>
   
        <img src={burger} className="d-block img-fluid mx-lg-auto" alt="Bootstrap Themes" width="1200" height="500" loading="lazy" style={{marginTop:"-120px"}}/>
      </div>
     
         
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3" style={{marginLeft:"160px",fontSize:"50px"}}>NEW</h1>
        <h4 className="display-4 fw-bold" style={{marginLeft:"100px",fontSize:"50px"}}>BURGER</h4>
        <h2 className="display-6 fw-bold lh-1 mb-3" style={{fontSize:"22px" ,marginLeft:"160px"}}>WITH ONION</h2>
        <p className="lead mx-4">In our delicious burger we lauched a new burger with ionon only Rs.100 We hope that customer like it.Try this ionon burger.</p>
        <div className="d-grid d-md-flex justify-content-md-start gap-2">
          <button type="button" className="btn btn-className btn-lg fw-bold hero me-md-2 px-4">ORDER NOW</button>
        
        </div>
      </div>
    </div>
 
  </div>
 
  </>
  )
}

export default Hero