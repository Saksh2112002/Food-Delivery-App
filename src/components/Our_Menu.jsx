import React from 'react'
import '../Css/Menu.css'
import burger from '../assets/Menu/burger_background_Menu.jpg'
import black_bean_burger from '../assets/Menu/black bean burgers.jpg'
import cheeseburger_veg from '../assets/Menu/cheeseburger vegetarian.jpg'
import Mexican_bean_burger from '../assets/Menu/Mexican Bean Burger.jpg'
import spicy_Tofu_Burger from '../assets/Menu/spicy Tofu Burger.jpg'
import vegan_lentil_burgers from '../assets/Menu/Vegan-Lentil-Burgers.jpg'
import Crispy_burger from '../assets/Home/Crispy-Chicken-Burger.jpg'
import ultimate_bacon_burger from '../assets/Home/Ultimate bacon.jpg'
import black_sheep_burger from '../assets/Home/black sheep burger.jpg'
import vegan_burger from '../assets/Home/vegan-burgers.jpg'
import Double_burger from '../assets/Home/double burger.jpg'
import Turkey_burger from '../assets/Home/Turkey burger.jpg'
import Smokey_burger from '../assets/Home/smokeyhouse_Burger.jpg'
import classic_burger from '../assets/Home/classic burger.jpg'
import cheese_burger from '../assets/Home/cheese burger.jpg'
import Frozen_patty_burger from '../assets/Menu/Frozen_patty_burger.jpg'
import Cornflake_Breaded_Chicken_Burger from '../assets/Menu/Cornflake_Breaded_Chicken_Burger.jpg'
import spicy_vegan_chicken_sachwich_burger from '../assets/Menu/spicy_vegan_chicken_sachwich_burger.jpg'
import Mini_Chicken_Burger from '../assets/Menu/Mini Chicken Burger.jpg'
import Scrum_delicious_burger from '../assets/Menu/Scrum-delicious Burger.jpg'
import Butter_burger from '../assets/Menu/butter-burgers.jpg'
import Grilled_green_onion_burger from '../assets/Menu/Grilled-Green-Onion-Burgers.jpg'
import Most_delicious_burger from '../assets/Menu/Most delicious burger.jpg'
import Ultimate_cheese_delicious_burger from '../assets/Menu/Ultimate cheese delicious burger.jpg'
import Yummy_Super_Burger from '../assets/Menu/Yummy Super Burger.jpg'
import Big_Juicy_burger from '../assets/Menu/Big-Juicy-Burgers.jpg'
import Hamburger_potato_Casserole_burger from '../assets/Menu/Hamburger_potato_Casserole.jpg'
import Spicy_Beef_Burger from '../assets/Menu/Spicy-Beef-Burgers.jpg'
import Footer from "./Footer.jsx"


const Our_Menu = () => {
  return (
    <>
    <div id='background_Menu'className="container-xl ">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 ">
        <h1 className="display-4 fw-bold lh-1 text-black" style={{fontFamily:"Brush Script MT"}}>Delicious Burger offer</h1>
        <p className="lead fw-bold">Get<span style={{color:"red"}}> 20% </span>off on our Special burger <br></br>spicy only on this Weekend.
        </p>
       
      </div>
      <div className="col-lg-5 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-4" src={burger} alt="" width="620"/>
      </div>
    </div>
  </div>
  <div className="container my-5">
    <div className="row row-cols-1 row-cols-sm-2">
      <div className="col">
         <h1 className="h mx-5 text-muted fw-bold" style={{fontSize:"60px",fontFamily:"Brush Script MT"}}><u>Menu</u></h1>
        
      </div>
    </div>
  </div>
  <div className="container my-5">
  <h2 className="sh mx-5 text-warning"><u>Veg Burger</u></h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
            <img src={vegan_burger} width="100%" height="260px"></img>
            
            <div className="card-body">
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}} ></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-heart float-end"style={{color:"gray"}}></i>
            <h4 className="h_m text-black">Vegan Burger</h4>
              <p className="card-text">Form into ½ inch thick patties and in a greased 
                  skillet over medium heat cook on each side for 3 to 4 minutes until crispy.
                   Enjoy on a burger, over a salad or on its own. Eat immediately, warm and
                   fresh, for the best texture. These easy vegan burgers ....</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i className="bi bi-currency-rupee"></i>99</small>
                <button type="button" className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
              
              </div>
            </div>
          </div>
        </div>
        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
   <img src={black_bean_burger} width="100%" height="260px"></img>
   
            <div className="card-body">
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-heart float-end" style={{color:"gray"}}></i>
            <h4 className="h2_m text-black">Black Bean Burger</h4>
              <p className="card-text">In a wide bowl, we use a fork to mash the black beans.
                 Stir in the oats, chopped walnuts, garlic, scallions, spices, tamari, vinegar, 
                 and maple syrup.1 egg,1 tablespoon chili powder,1 tablespoon cumin,1 teaspoon
                  Thai chili sauce or hot sauce,½ cup.....</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <small className="text-S"><i className="bi bi-currency-rupee"></i>80</small>
                  <button type="button" className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
   <img src={cheeseburger_veg} width="100%" height="260px"></img>
   
            <div className="card-body">
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-heart float-end" style={{color:"gray"}}></i>
            <h4 className="h3_m text-black">Veg Cheese Burger</h4>
              <p className="card-text">4 halved burger buns,1/2 finely chopped capsicum ( green pepper),
              2 tablespoon American corn kernels,80 gm shredded cabbage,2 tablespoon refined oil,2 
              pinches white pepper powder,1/2 gm sliced tomato,4 medium cheese slices, 1 1/2 small finely
             .....</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i className="bi bi-currency-rupee"></i>89</small>
                  <button type="button" className=" menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
               
              </div>
            </div>
          </div>
        </div>

        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
        <img src={cheese_burger} width="100%" height="260px"></img>
       
            <div className="card-body">
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-heart float-end" style={{color:"gray"}}></i>
            <h4 className="h4_m text-black">Cheese Burger</h4>
              <p className="card-text">Cheese burger in this 1 lb. ground beef (80/20),1 lb. ground sirloin (90/10),
                1 Tbsp. Worcestershire sauce,1 tsp. kosher salt,1 tsp. ground black pepper,
                1 Tbsp. vegetable oil,4 toasted hamburger buns and it is ready to eat cheese burger....</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i className="bi bi-currency-rupee"></i>67</small>
                  <button type="button" className=" menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
        <img src={Turkey_burger} width="100%" height="260px"></img>
       
            <div className="card-body">
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
           <i className="bi bi-star mx-2" style={{color:"gold"}}></i>
           <i className="bi bi-heart float-end"style={{color:"gray"}}></i>
           <h4 className="h5_m text-black">Turkey Burger</h4>
              <p className="card-text">Finely mince 2-3 cloves of garlic. Fresh garlic 
                  adds lots of flavor. Add 1-2 tablespoons of Dijon mustard. The tangy
                   mustard complements the turkey.Use 1-2 teaspoons of Worcestershire 
                   sauce for savory umami flavor. Make sure to use a gluten-free....</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i className="bi bi-currency-rupee"></i>56</small>
                  <button type="button" className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
      <img src={Mexican_bean_burger} width="100%" height="260px"></img>
      
            <div className="card-body">
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}} ></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}} ></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}} ></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}} ></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}} ></i>
            <i className="bi bi-heart float-end" style={{color:"gray"}}></i>
            <h4 className="h6_m text-black">Mexican Bean Burger</h4>
              <p className="card-text">Place the beans, coriander, spring onions, egg, and 2 cheese
               slices into a food processor and blitz until roughly chopped. ...,Divide into 4 and shape
               into burgers with damp hands. ...,Preheat the grill to high. ...,Toast the cut surfaces of
             the burger ....</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i className="bi bi-currency-rupee"></i>67</small>
                <button type="button" className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
              
              </div>
            </div>
          </div>
        </div>

        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
           <img src={spicy_Tofu_Burger} width="100%" height="260px"></img>
          
            <div className="card-body">
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star-half mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-heart float-end" style={{color:"gray"}}></i>
           <h4 className="h7_m text-black">Spicy Tofu Burger</h4>
              <p className="card-text">16 ounces extra-firm tofu,2 large eggs,1/2 cup panko breadcrumbs,1
              /2 cup cashews,1/2 cup pumpkin seeds,1/2 cup sliced mushrooms,1 tablespoon dijon mustard,1
               tablespoon soy sauce,1 teaspoon Worcestershire sauce,1 teaspoon cumin,1....
             
</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i className="bi bi-currency-rupee"></i>56</small>
                  <button type="button" className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
           <img src={vegan_lentil_burgers} width="100%" height="260px"></img>
           
            <div className="card-body">
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star-half mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-heart float-end" style={{color:"gray"}}></i>
           <h4 className="h8_m text-black">Vegan Lentil Burger</h4>
              <p className="card-text">1.5 cups red lentils (dried) - For SCD soak for at least 12 hours.
              2 cloves of garlic,Onion,1 TBSP Tomato paste,1 cup shredded carrots,1 cup cilantro,1
               tsp salt,1/2 tsp black pepper,1/4 tsp cumin,1/2 tsp cajun spices,2 TBSP olive oil....</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <small className="text-S"><i className="bi bi-currency-rupee"></i>67</small>
                  <button type="button" className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
          <img src={ultimate_bacon_burger} width="100%" height="260px"></img>
          
            <div className="card-body">
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-half mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-heart float-end"style={{color:"gray"}}></i>
            <h4 className="h9_m text-black">Ultimate Bacon Burger</h4>
              <p className="card-text">Bacon wrapped burgers are a delicious twist on the
                   classNameic burger that takes this barbecue staple to new heights of flavor. 
                   By wrapping beef patties in bacon before cooking you infuse the meat with 
                   smoky salty, and sweet notes ....</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i className="bi bi-currency-rupee"></i>100</small>
                  <button type="button" className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="container">
     <h2 className="th mx-5 text-danger"><u>Non-Veg Burger</u></h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 pt-4">
        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
      <img src={Crispy_burger} width="100%" height="260px"></img>
      
            <div className="card-body">
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-heart float-end"style={{color:"gray"}}></i>
           <h4 className="h10_m text-black">Crispy Burger</h4>
              <p className="card-text">1/2 pound ground sirloin,1/2 pound ground brisket,1/2 pound ground
                 chuck,Kosher salt and freshly ground pepper,1 teaspoon garlic powder,6 slices American
                  cheese,6 potato hamburger buns, split,Melted butter, for brushing the buns,Ketchup, for
                   serving....</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i className="bi bi-currency-rupee"></i>68</small>
                  <button type="button"className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
       <img src={classic_burger} width="100%" height="260px"></img>
       
            <div className="card-body">
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-heart float-end"style={{color:"gray"}}></i>
            <h4 className="h11_m text-black">Classic Burger</h4>
              <p className="card-text">TclassNameic Burger in this we have to take 24 oz (1 1/2 lbs) freshly 
                ground beef chuck,2 Tsbp Canola Oil,2 slices unsalted butter, 4 Tbsp butter and it ready
                to eat classNameic burger and we delicious burger restuarant we make it fresh and good....</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i className="bi bi-currency-rupee"></i>56</small>
                  <button type="button"className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
             
              </div>
            </div>
          </div>
        </div>
        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
     <img src={black_sheep_burger} width="100%" height="260px"></img>
    
            <div className="card-body">
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-heart float-end"style={{color:"gray"}}></i>
            <h4 className="h12_m text-black">Black Sheep Burger</h4>
              <p className="card-text">Burger Black Sheep Christian Kuchler knows how 
                  to perfectly combine flavors in this foray into US cuisine. Fine Angus
                   beef is a match made in heaven with a delicious BBQ sauce, mustard mayo 
                   with wasabi, and divine red wine onions....</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i className="bi bi-currency-rupee"></i>68</small>
                  <button type="button"className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
               
              </div>
            </div>
          </div>
        </div>

        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
        <img src={Double_burger} width="100%" height="260px"></img>
    

            <div className="card-body">
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-heart float-end"style={{color:"gray"}}></i>
            <h4 className="h13_m text-black">Double Burger</h4>
              <p className="card-text">Double burger in this ½ lb. Ground
                   Beef (yes, ½ lb.),2 strips Lightly Cooked Bacon (chopped)
                ,½ cup Shredded Cheddar Cheese,1 Tbsp. Chopped Fresh Chives
                ,½ tsp. Onion Powder,½ tsp. Garlic Powder,Dash of Sea Salt
                 ....</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i className="bi bi-currency-rupee"></i>66</small>
                  <button type="button"className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
             
              </div>
            </div>
          </div>
        </div>
        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
  <img src={Smokey_burger} width="100%" height="260px"></img>
          
        <div className="card-body">
          <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
          <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
          <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
          <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
          <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
          <i className="bi bi-heart float-end"style={{color:"gray"}}></i>
          <h4 className="h14_m text-black">SmokeyHouse Burger</h4>
          <p className="card-text">In a large bowl, combine the ground beef, 
                  ground pork, beaten egg, smoked paprika, garlic powder, onion powder,
                   salt, and black pepper. Mix well until all the ingredients are evenly 
                   incorporated. Divide the meat mixture into four equal portions and
                    shape ....</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i className="bi bi-currency-rupee"></i>77</small>
                  <button type="button"className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
         <img src={Frozen_patty_burger} width="100%" height="260px"></img>
        
        <div className="card-body">
         <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
         <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
         <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
         <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
         <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
         <i className="bi bi-heart float-end"style={{color:"gray"}}></i>
         <h4 className="h15_m text-black">Frozen Patty Burger</h4>
      <p className="card-text">Frozen burger patties are already one of the simplest proteins to get on 
        the table fast–and now it's even easier, thanks to the air fryer. Grab a patty straight from the
        freezer, season it, toss it in the fryer, and get your accompaniments ready while it's....
       </p>
         <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <small className="text-S"><i className="bi bi-currency-rupee"></i>79</small>
              <button type="button"className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add to Card</button>
            </div>
            
          </div>
          </div>
          </div>
       </div>

        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
           <img src={spicy_vegan_chicken_sachwich_burger} width="100%" height="260px"></img>
          <div className="card-body">
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-heart float-end"style={{color:"gray"}}></i>
           <h4 className="h16_m text-black">Spicy Vegan Chicken Sachwich Burger</h4>
          <p className="card-text">This spicy vegan sandwich is made with a plant based chick'n patty, 
            homemade Nashville hot sauce, coleslaw, and pickles, between a fluffy bun.2 cups cabbage 
            shredded,½ cup vegan mayo,2 ....
</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i class="bi bi-currency-rupee"></i>67</small>
                  <button type="button"className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
          <img src={Cornflake_Breaded_Chicken_Burger} width="100%" height="260px"></img>
   

            <div className="card-body">
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-star mx-2"style={{color:"gold"}}></i>
           <i className="bi bi-heart float-end"style={{color:"gray"}}></i>
           <h4 className="h17_m text-black">Cornflake Breaded Chicken Burger</h4>
              <p className="card-text">we put 140 g (2 pcs) Egg,80 g Cornflakes,2 g (1 tsp) Paprika 
                Powder,6 g (1 tsp) Salt,0.5 g (0.5 tsp) Thyme dried,0.25 g (0.5 tsp) Basil, dried,0.25 g
                (0.5 tsp) Oregano Dried,1.1 g (0.5 tsp) Black Pepper,Burger,....
     </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i class="bi bi-currency-rupee"></i>78</small>
                  <button type="button"className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
  <img src={Mini_Chicken_Burger} width="100%" height="260px"></img>
 
          <div className="card-body">
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-half mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-heart float-end"style={{color:"gray"}}></i>
            <h4 className="h18_m text-black">Mini Chicken Burger</h4>
              <p className="card-text">2 piece Chicken breast fillet(cut into small pieces),1n1/2 tsp
               chilly powder,1 tsp fennel seeds,1tspn ginger paste,1 tsp garlic paste,1 tsp vinegar,Salt
               as per taste.Cook chicken with all these ingredients.For sauteing,1 medium Onion....</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i class="bi bi-currency-rupee"></i>78</small>
                  <button type="button"className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
 <div className="container">
  <h1 className="fh text-primary pt-4"><u>Special Burger of Delicious Burger Restuarant</u></h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 pt-4">
        <div className="col pt-4">
       <div className="card shadow-sm bg-white">
       <img src={Scrum_delicious_burger} width="100%" height="260px"></img>
    

        <div className="card-body">
          <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i> 
          <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
          <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
          <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
          <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
          <i className="bi bi-heart float-end" style={{color:"gray"}}></i>
          <h4 className="h18_m text-black">Scrum Delicious Burger</h4>

              <p className="card-text">we put 1 pound Ground beef (80/20 blend),0.5 teaspoon Salt,0.5
               teaspoon Black pepper,0.5 teaspoon Garlic powder,0.5 teaspoon Onion powder,4 pieces Burger
               buns,4 pieces Cheddar cheese slices,4 pieces Lettuce leaves,8 pieces Tomato.....
               </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i class="bi bi-currency-rupee"></i>66</small>
                  <button type="button"className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
              
              </div>
            </div>
          </div>
        </div>
        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
    <img src={Butter_burger} width="100%" height="260px"></img>
  
         <div className="card-body">
          <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
          <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
          <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
          <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
          <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
          <i className="bi bi-heart float-end"style={{color:"gray"}}></i>
          <h4 className="h19_m text-black">Butter Burger</h4>
              <p className="card-text">Onions:1 tablespoon butter,2 teaspoons olive oil,½ cup chopped
               onion,Burgers:⅔ pound 90% lean ground beef,2 teaspoons Italian seasoning (such as Trader
               Joe's® 21 Seasoning Salute),1 tablespoon ghee (clarified butter),2 slices white Cheddar
               ......</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i class="bi bi-currency-rupee"></i>88</small>
                  <button type="button"className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
           <img src={Grilled_green_onion_burger} width="100%" height="260px"></img>
    
          <div className="card-body">
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-heart float-end"style={{color:"gray"}}></i>
            <h4 className="h20_m text-black">Grilled Green Onion Burger</h4>

              <p className="card-text">8 bacon strips, cut in half,1/2 cup reduced-sodium teriyaki sauce
              1/4 cup hoisin sauce,6 green onions, chopped,1 tablespoon garlic powder,1 tablespoon ground
              cumin,1/2 teaspoon pepper,2 pounds ground sirloin,8 ounces sliced mushrooms,2 baby bok.....</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i class="bi bi-currency-rupee"></i>67</small>
                  <button type="button"className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
              
              </div>
            </div>
          </div>
        </div>

        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
     <img src={Most_delicious_burger} width="100%" height="260px"></img>
     
          <div className="card-body">
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-heart float-end"style={{color:"gray"}}></i>
            <h4 className="h21_m text-black">Most Delicious Burger</h4>


              <p className="card-text"> In a large bowl, combine 1/2 kg ground chicken, 3/4 tsp. smoked 
              paprika, 1 minced garlic clove, 3 minced onions, and season with salt and pepper. Divide
              mixture into 4 patties.2. In a large skillet over medium heat, heat 2 tbsp. olive oil. Add
              patties and,.....</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i class="bi bi-currency-rupee"></i>78</small>
                  <button type="button"className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
         <img src={Ultimate_cheese_delicious_burger} width="100%" height="260px"></img>
    

          <div className="card-body">
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-heart float-end"style={{color:"gray"}}></i>
            <h4 className="h22_m text-black">Ultimate Cheese Delicious Burger</h4>

              <p className="card-text">For caramelised onions:-1 tsp oil 1 medium onion sliced,1 tbsp
               sugar Pinch of salt,1 tbsp vinegar Half cup water,For the patty:-2 large grated potatoes 
               boiled,1 grated carrot,½ cup fresh boiled peas 1onion, finely chopped,....</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i class="bi bi-currency-rupee"></i>67</small>
                  <button type="button"className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
           <img src={Yummy_Super_Burger} width="100%" height="260px"></img>
    
          <div className="card-body">
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-heart float-end"style={{color:"gray"}}></i>
            <h4 className="h23_m text-black">Yummy Super Burger</h4>
              <p className="card-text">In a pan add oil and add garlic, ginger, green chili, and onions. 
              ...Add the butter to the middle of the pan and add the spices to it. ...Add the veggies 
              and cook it till combined for 2-3 mins.Add the salt, sugar, and pepper along with the 
              chopped herbs and mix it....</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i class="bi bi-currency-rupee"></i>77</small>
                  <button type="button"className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
            
              </div>
            </div>
          </div>
        </div>

        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
            <img src={Big_Juicy_burger} width="100%" height="260px"></img>
     
          <div className="card-body">
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-half mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-heart float-end"style={{color:"gray"}}></i>
            <h4 className="h24_m text-black">Big Juicy Burger</h4>
    

              <p className="card-text">2 sticks (8 ounces) cold unsalted butter,3 pounds ground beef,
               preferably sirloin,1 tablespoon kosher salt,8 slices cheese, such as American, cheddar, or
               Swiss (optional),For serving: split hamburger buns, lettuce, sliced tomato,..... </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i class="bi bi-currency-rupee"></i>68</small>
                  <button type="button"className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
          <img src={Hamburger_potato_Casserole_burger} width="100%" height="260px"></img>
         
          <div className="card-body">
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-half mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-heart float-end"style={{color:"gray"}}></i>
            <h4 className="h25_m text-black">Hamburger Patato Casserole Burger</h4>
        

              <p className="card-text">we put 1 pound lean ground beef,1 (10.5 ounce) can condensed cream
               of mushroom soup,cup milk,½ cup chopped onion,salt and ground black pepper to taste,3 cups
               peeled and thinly sliced potatoes, cup shredded......</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <small className="text-S"><i class="bi bi-currency-rupee"></i>66</small>
                  <button type="button"className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
             
              </div>
            </div>
          </div>
        </div>
        <div className="col pt-4">
          <div className="card shadow-sm bg-white">
           <img src={Spicy_Beef_Burger} width="100%" height="260px"></img>
     
          <div className="card-body">
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star-half mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-star mx-2"style={{color:"gold"}}></i>
            <i className="bi bi-heart float-end"style={{color:"gray"}}></i>
            <h4 className="h26_m text-black">Spicy Beef Burger</h4>

              <p className="card-text">Preheat grill for high heat.In a large bowl, mix together the beef,
               garlic, jalapeno peppers, poblano pepper, habanero pepper, red pepper flakes, cilantro, 
               and cumin. Form into burger patties.Lightly oil the grill grate. Place burgers on grill,
               and cook for 5 minutes.....</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                 <small className="text-S"><i class="bi bi-currency-rupee"></i>80</small>
                  <button type="button"className="menu_button btn btn-sm btn-outline-secondary mx-4"><i className="bi bi-bag mx-2"></i>Add To Card</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
   
    <Footer/>
    
  </>

  )
}

export default Our_Menu
