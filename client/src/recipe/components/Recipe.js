/* Recipe LANDING PAGE */

import React, { Component } from "react"
import Sidebar from "../../components/Sidebar"
import "../css/Recipe.css"


class Recipe extends Component{

   render(){
      return(
         <div className="Recipe-main-container">
            <Sidebar />
            <h1>Recipe Landing page is up Man!</h1>
         </div>
      )
   }
}

export default Recipe