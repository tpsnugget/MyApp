/* MAIN LANDING PAGE */

import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../css/Landing.css"

class Landing extends Component {

   render() {
      return (
         <div className="Landing-main-container">

            <div className="Landing-img-row">
               <div className="Landing-button">
                  <p className="Landing-title">Beer</p>
                  <Link to="/landingBeer">
                     <img
                        className="Landing-img"
                        src="https://images.unsplash.com/photo-1571527036651-5860024b2351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="Beer" />
                  </Link>
               </div>

               <div className="Landing-button">
                  <p className="Landing-title">Recipes</p>
                  <Link to="/landingRecipe">
                     <img
                        className="Landing-img"
                        src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="Recipe" />
                  </Link>
               </div>
            </div>

            <div className="Landing-img-row">
               <div className="Landing-button">
                  <p className="Landing-title">Restaurants</p>
                  <Link to="/landingRestaurant">
                     <img
                        className="Landing-img"
                        src="https://images.unsplash.com/photo-1489528792647-46ec39027556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="Restaurant" />
                  </Link>
               </div>

               <div className="Landing-button">
                  <p className="Landing-title">RV Sites</p>
                  <Link to="/landingRV">
                     <img
                        className="Landing-img"
                        src="https://images.unsplash.com/photo-1536483229849-71255a26bbd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="RV" />
                  </Link>
               </div>
            </div>

         </div>
      )
   }
}

export default Landing