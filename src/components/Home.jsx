import React from 'react'
import Hero from "./Hero"
import About from './About'
import {Features} from './Features'
import Cards from './Cards'
import Adds from './Adds'
import Parallax from './Parallax'
import Brandsslider from './Brandsslider'
import Slider_Home from './Slider_Home'
import BurgerDelivery from './BurgerDelivery'
import  Footer from './Footer'






const Home = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Features/>
   <Cards/>
   <Adds/>
   <Parallax/>
   <Brandsslider/>
   <Slider_Home/>
   <BurgerDelivery/>
   <Footer/>
   
    
    </>
  )
}

export default Home