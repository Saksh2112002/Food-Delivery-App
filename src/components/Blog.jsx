import React from 'react'
import '../Css/Blog.css'
import famous_burger from '../assets/Blog/burgerspicyIndian_jpg.jpg'
import famous_burger2 from '../assets/Blog/veggie Indian burger.jpg'
import awards from '../assets/Blog/award.jpg'
import Black_Sheep_burger from '../assets/Home/black sheep burger.jpg'
import Footer from "./Footer.jsx"
const Blog = () => {
  return (
    <>
    <main className="container-fluid">
    <div id='background_blog' className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
      <div className="col-md-6 px-0">
        <h1 className="display-4 fst-italic text-black fw-bold mx-5" style={{fontSize:"100px",fontFamily:"Brush Script MT"}}>Blog</h1>
      
      
      </div>
    </div>
  
    <div className="row mb-2">
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">Famous Burger</strong>
          <h3 className="mb-0">Spicy Burger</h3>
          <div className="mb-1 text-muted">Nov 12</div>
          <p className="mb-auto">Spicy Burger is very Famous around all countries.
          and people Like it very much.people like eat this spicy burger again and again.</p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>
        <div className="col-auto d-none d-lg-block">
        <img src={famous_burger}  width="100%" height="201px"></img>
        </div>
    
    </div>
      </div>
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">Popular Burger</strong>
            <h3 className="mb-0">Veggie Burger</h3>
            <div className="mb-1 text-muted">Nov 11</div>
            <p className="mb-auto">Veggie Burger is popular all over world and people 
             like this veggie burger so much that people eat it again and again.</p>
            <a href="#" className="stretched-link">Continue reading</a>
          </div>
          <div className="col-auto d-none d-lg-block">
        <img src={famous_burger2} width="100%" height="251px"></img>
          </div>
        </div>
      </div>
    </div>
      
       </main>
       <div className="container-fluid col-xxl-8 px-4 py-2">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={awards} className="d-block mx-lg-auto img-fluid border rounded-3" alt="Bootstrap Themes" width="500" height="500" loading="lazy"/>
        <h5 className="year text-center"><u>Delicious Burger Awards</u></h5>
        <p className="list text-primary text-center">.Awards in 2004<br></br>.Awards in 2008<br></br>
        .Awards in 2010<br></br>.Awards in 2012<br></br>.Awards in 2016<br></br>.Awards in 2018
        <br></br>.Awards in 2022<br></br>.Awards in 2024</p>
      </div>
      <div className="col-lg-6">
        <h5 className="display-5 fw-bold lh-1 mb-3 text-danger" style={{fontFamily:"Brush Script MT"}}>Delicious Burger Branch History</h5>
        <hr></hr>
        <h4 className="display-4 fs-2 text-info">When Delicious Burger Branch was started and why ?</h4>
        <p className="lead text-secondary">Delicious Burger branch was started on 21 january 2002 and
          first brach of delicious Burger was in mumbai , vasai(e) .When it is started is was small
          branch but now 2025 it is all over india has a delicous burger brachs like mumbai,
          patna,delhi,bihar,jaipur etc.<br></br>
          This Delicious Burger was for people buy the burger online and get the delivery of burger at 
          there home and some working people not get time to buy burger at restuarant thats why this
          Delicious Burger was started. </p>
        
      </div>
    </div>
  </div>
  <div id='burger_background' className="bg-dark text-secondary px-4 py-5">
    <div className="py-5">
      <h1 className="display-5 fw-bold text-white">Cheese Burger</h1>
      <div className="col-lg-6 mx-auto">
    
        
      </div>
    </div>
  </div>
  <div className="px-4 pt-5 my-5 text-center border-bottom">
    <h1 className="display-4 fw-bold text-danger">Black Sheep Burger</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4 text-secondary">Black Sheep Burger is very populer and people like it very much.</p>
      
    </div>
    <div className="overflow-hidden">
      <div className="container px-5">
        <img src={Black_Sheep_burger} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="400" height="200" loading="lazy"></img>
      </div>
    </div>
  </div>
 
  <Footer/>
    
  </>
       
  )

}

export default Blog