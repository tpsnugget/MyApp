/* Recipe LANDING PAGE */

import React, { Component } from "react"
import Sidebar from "../../components/Sidebar"
import Mininavbar from "../../components/Mininavbar"

import "../css/Recipe.css"


class Recipe extends Component{

   render(){
      return(
         <div className="Recipe-main-container">
            <Sidebar name={this.props.name}/>
            <Mininavbar name={this.props.name}/>
         </div>
      )
   }
}

export default Recipe