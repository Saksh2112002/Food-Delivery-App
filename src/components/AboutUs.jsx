import React from 'react'
import '../Css/AboutUs.css'
import Food_delivery_boy from '../assets/About/food_delivery_boy.jpg'
import food_delivery_boy_cartoon from '../assets/About/food_delivery_boy_cartoon.jpg'
import careerdeliciousburger from '../assets/About/careeratDeliciousburger.jpg'
import Footer from "./Footer.jsx"
const AboutUs = () => {
  return (
    <>
    <div id='About_Background'className="px-2 py-5 text-center">
  
    <h1 className="display-5 fw-bold text-black" style={{fontFamily:"Brush Script MT",fontSize:"80px"}}>AboutUs</h1>
   
    
  </div>
  <div className="container-fluid col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={Food_delivery_boy} className=" food d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="500" loading="lazy"/>
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold lh-1 position-relative right-0 top-0 text-primary text-center mb-5"style={{fontFamily:"Forte"}}><u>GET TO KNOW US</u></h1>
      <h5 className="display text-danger">Mission</h5>
      <p className="lead text-secondary">Our mission is to elevate the quality of life of the urban consumer
        by offering unparalleled convenience. Convenience is what makes us tick. It’s what makes us get
        out of bed and say, “Let’s do this.</p>
      <h6 className="display text-danger fs-5">Values</h6>
      <p className="lead text-secondary">Our actions are strongly defined by the Delicious Burger values. Through
        ups, downs, and everything in between; Swiggsters put these values into practice in their
        everyday ways of working. Read on to get a taste of how Swiggsters live and breathe these
        values and how it forms the backbone of our culture.</p>
    </div>
  </div>
</div>
<div className="container col-xxl-8 px-4">
<h1 className="display-5 fw-bold lh-1 mb-3 text-primary text-center mb-5"style={{fontFamily:"Forte"}} ><u>INDUSTRY PIONEER</u></h1>
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={food_delivery_boy_cartoon} className="d-block mx-lg-auto img-fluid border rounded-5" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
       
        <p className="lead text-secondary">Being among the first few entrants, Delicious Burger has successfully 
         pioneered the hyperlocal commerce industry in India, launching Food Delivery in 2014 and Quick
         Commerce in 2020. Due to the pioneering status of Delicious Burger, it is well-recognised as a leader in
         innovation in hyperlocal commerce and as a brand synonymous with the categories it is present in.</p>
        
      </div>
    </div>
  </div>
  <div className="container-fluid px-4 py-5" id="icon-grid">
    
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div className="col d-flex align-items-start"style={{borderStyle:"solid",border:"none",borderRight:"solid"}}>
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#bootstrap"></use></svg>
        <div>
          <h4 className="fw-bold mb-0 text-primary"style={{fontSize:"36px"}}>3 Billion+</h4>
          <p>orders delivered</p>
        </div>
      </div>
      <div className="col d-flex align-items-start"style={{borderStyle:"solid",border:"none",borderRight:"solid"}}>
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#cpu-fill"></use></svg>
        <div>
          <h4 className="fw-bold mb-0 text-primary"style={{fontSize:"36px"}}>220k+</h4>
          <p>restuarant partners</p>
        </div>
      </div>
      <div className="col d-flex align-items-start" style={{borderStyle:"solid",border:"none",borderRight:"solid"}}>
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#calendar3"></use></svg>
        <div>
          <h4 className="fw-bold mb-0 text-primary"style={{fontSize:"36px"}}>520k+</h4>
          <p>delivery partners</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#home"></use></svg>
        <div>
          <h4 className="fw-bold mb-0 text-primary"style={{fontSize:"36px"}}>680+</h4>
          <p>cities in India</p>
        </div>
      </div>
      
      
    </div>
  </div>
  
<div className="container col-xxl-8 px-4 py-5">
<h1 className="display-5 fw-bold lh-1 mb-3 text-primary text-center"style={{fontFamily:"Forte"}}><u>CAREERS AT DELICIOUS BURGER</u></h1>
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={careerdeliciousburger}className="d-block mx-lg-auto img-fluid border rounded-5" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
       
        <p className="lead text-secondary mb-5">When you work at Delicious Burger, you’re joining a culture of
         innovation, teamwork, and endless possibilities. We believe in empowering our employees to take
         charge of their careers and make a real impact. Whether you’re a software engineer, a marketing
         guru, a logistics expert, or someone who loves delivering exceptional customer experiences,
        there’s a place for you at Delicious Burger.
        If you’re excited about making a difference and want to be part of a team that’s transforming
        the way people live, then we want to hear from you!
        Explore our current openings and embark on your next career adventure with Delicious. Let’s 
        deliver unparalleled convenience together!</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button"className="btn btn-primary btn-lg px-4 me-md-2">Known more</button>
        
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</>
  )
}

export default AboutUs