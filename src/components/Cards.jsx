import React from 'react'
import '../Css/Cards.css'
import Crispy_burger from '../assets/Home/Crispy-Chicken-Burger.jpg'
import ultimate_bacon_burger from '../assets/Home/Ultimate bacon.jpg'
import black_sheep_burger from '../assets/Home/black sheep burger.jpg'
import vegan_burger from '../assets/Home/vegan-burgers.jpg'
import Double_burger from '../assets/Home/double burger.jpg'
import Turkey_burger from '../assets/Home/Turkey burger.jpg'
import Smokey_burger from '../assets/Home/smokeyhouse_Burger.jpg'
import classic_burger from '../assets/Home/classic burger.jpg'
import cheese_burger from '../assets/Home/cheese burger.jpg'
const Cards = () => {
  return (
    <main>

    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light fw-bold">OUR CRAZY BURGERS</h1>
          <p className="lead text-muted">Delicious Burger give our customer different types of cracy 
            burger and we have lot of different type of burger in our Delicious Burger app.</p>
          
        </div>
      </div>
    </section>
  
    <div className="album py-5 bg-light">
      <div className="container">
  
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-8">
          <div className="col pt-4">
            <div className="card shadow-sm bg-white">
             <img src={Crispy_burger} height="240px"></img>
              <div className="card-body">
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-half mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-heart mx-4 float-end"></i>
                <h4 className="card-topic"style={{color:"black"}}>Crispy Chicken Burger</h4>
                <p className="card-text fs-forte">Crispy Chicken Burger is made of boneless chicken
                   breast or thigh, marinated in a blend of spices, coated in a mixture
                    of all-purpose flour and cornflour, and then deep-fried until golden 
                    and crispy. It is assembled in a burger bun with various ....

              </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                  <small className="text mx-4" height="auto"><i className="bi bi-currency-rupee"></i>88</small>
                 <button type="button" className="btn btn-outline-secondary"style={{color:"black",backgroundColor:"gold"}}><i className="bi bi-bag mx-2"></i>Add To Card</button>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="col pt-4">
            <div className="card shadow-sm bg-white">
           <img src={ultimate_bacon_burger}></img>
              <div className="card-body">
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-half mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-heart mx-4 float-end"></i>
                <h4 className="card-topic" style={{color:"black"}}>Ultimate Bacon Burger</h4>
                <p className="card-text">Bacon wrapped burgers are a delicious twist on the
                   classic burger that takes this barbecue staple to new heights of flavor. 
                   By wrapping beef patties in bacon before cooking you infuse the meat with 
                   smoky salty, and sweet notes ....

</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                  <small className="text mx-4"><i className="bi bi-currency-rupee"></i>100</small>
                    <button type="button" className="btn btn-outline-secondary" style={{backgroundColor:"gold",color:"black"}}><i className="bi bi-bag mx-2"></i>Add To Card</button>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="col pt-4">
            <div className="card shadow-sm bg-white">
            <img src={black_sheep_burger} height="240px"></img>
              <div className="card-body">
              <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2" style={{color:"gold"}}></i>
              <i className="bi bi-star-half mx-2" style={{color:"gold"}}></i>
              <i className="bi bi-heart mx-4 float-end"></i>
                <h4 className="card-topic">Black Sheep Burger</h4>
                <p className="card-text">Burger Black Sheep Christian Kuchler knows how 
                  to perfectly combine flavors in this foray into US cuisine. Fine Angus
                   beef is a match made in heaven with a delicious BBQ sauce, mustard mayo 
                   with wasabi, and divine red wine onions....


</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                  <small className="text mx-4"><i className="bi bi-currency-rupee"></i>68</small>
                    <button type="button" className="btn btn-outline-secondary" style={{backgroundColor:"gold",color:"black"}}><i className="bi bi-bag mx-2"></i>Add To Card</button>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
  
          <div className="col pt-4">
            <div className="card shadow-sm bg-white">
             <img src={vegan_burger} height="240px"></img>
              <div className="card-body">
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-heart mx-4 float-end"></i>
                <h4 className="card-topic">Vegan Burger</h4>
                <p className="card-text">Form into ½ inch thick patties and in a greased 
                  skillet over medium heat cook on each side for 3 to 4 minutes until crispy.
                   Enjoy on a burger, over a salad or on its own. Eat immediately, warm and
                   fresh, for the best texture. These easy vegan burgers ....
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                  <small className="text mx-4"><i className="bi bi-currency-rupee"></i>99</small>
                    <button type="button" className="btn btn-outline-secondary"style={{backgroundColor:"gold",color:"black"}}><i className="bi bi-bag mx-2"></i>Add To Card</button>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="col pt-4">
            <div className="card shadow-sm bg-white">
             <img src={Double_burger} height="240px"></img>
              <div className="card-body">
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-half mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-heart mx-4 float-end"></i>
                <h4 className="card-topic">Double Burger</h4>
                <p className="card-text">Double burger in this ½ lb. Ground
                   Beef (yes, ½ lb.),2 strips Lightly Cooked Bacon (chopped)
                ,½ cup Shredded Cheddar Cheese,1 Tbsp. Chopped Fresh Chives
                ,½ tsp. Onion Powder,½ tsp. Garlic Powder,Dash of Sea Salt
                 ....
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <small className="text mx-4"><i className="bi bi-currency-rupee"></i>66</small>
                    <button type="button" className="btn btn-outline-secondary"style={{backgroundColor:"gold",color:"black"}}><i className="bi bi-bag mx-2"></i>Add To Card</button>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="col pt-4">
            <div className="card shadow-sm bg-white">
             <img src={Turkey_burger} height="240px"></img>
              <div className="card-body">
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-heart mx-4 float-end"></i>
                <h4 className="card-topic">Turkey Burger</h4>
                <p className="card-text">Finely mince 2-3 cloves of garlic. Fresh garlic 
                  adds lots of flavor. Add 1-2 tablespoons of Dijon mustard. The tangy
                   mustard complements the turkey.Use 1-2 teaspoons of Worcestershire 
                   sauce for savory umami flavor. Make sure to use a gluten-free....
               </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                  <small className="text mx-4"><i className="bi bi-currency-rupee"></i>56</small>
                    <button type="button" className="btn btn-outline-secondary"style={{backgroundColor:"gold",color:"black"}}><i className="bi bi-bag mx-2"></i>Add To Card</button>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
  
          <div className="col pt-4">
            <div className="card shadow-sm bg-white">
             <img src={Smokey_burger} height="240px"></img>
  
              <div className="card-body">
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-half mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-heart mx-4 float-end"></i>
                <h4 className="card-topic">Smokey House Burger</h4>
                <p className="card-text"> In a large bowl, combine the ground beef, 
                  ground pork, beaten egg, smoked paprika, garlic powder, onion powder,
                   salt, and black pepper. Mix well until all the ingredients are evenly 
                   incorporated. Divide the meat mixture into four equal portions and
                    shape ....
               </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <small className="text mx-4"><i className="bi bi-currency-rupee"></i>77</small>
                    <button type="button" className="btn btn-outline-secondary" style={{backgroundColor:"gold",color:"black"}}><i className="bi bi-bag mx-2"></i>Add To Card</button>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="col pt-4">
            <div className="card shadow-sm bg-white">
        <img src={classic_burger} height="240px"></img>
  
              <div className="card-body">
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-half mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-heart mx-4 float-end"></i>
                <h4 className="card-topic">Classic Burger</h4>
                <p className="card-text">Classic Burger in this we have to take 24 oz (1 1/2 lbs)
                   freshly ground beef chuck,2 Tsbp Canola Oil,2 slices unsalted butter,
                   4 Tbsp butter and it ready to eat Classic burger and we delicious 
                   burger restuarant we make it fresh and good quality of ingredients....</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                  <small className="text mx-4"><i className="bi bi-currency-rupee"></i>89</small>
                    <button type="button" className="btn btn-outline-secondary"style={{backgroundColor:"gold",color:"black"}}><i className="bi bi-bag mx-2"></i>Add To Card</button>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="col pt-4">
            <div className="card shadow-sm bg-white">
          <img src={cheese_burger}></img>
  
              <div className="card-body">
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-fill mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-star-half mx-2"style={{color:"gold"}}></i>
              <i className="bi bi-heart mx-4 float-end"></i>
                <h4 className="card-topic">Cheese Burger</h4>
                <p className="card-text">Cheese burger in this 1 lb. ground beef (80/20),1 lb. ground sirloin (90/10),
                1 Tbsp. Worcestershire sauce,1 tsp. kosher salt,1 tsp. ground black pepper,
                1 Tbsp. vegetable oil,4 toasted hamburger buns and it is ready to eat cheese burger....</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <small className="text mx-4"><i className="bi bi-currency-rupee"></i>89</small>
                    <button type="button" className="btn btn-outline-secondary"style={{backgroundColor:"gold",color:"black"}}><i className="bi bi-bag mx-2"></i>Add To Card</button>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </main>
  )
}

export default Cards