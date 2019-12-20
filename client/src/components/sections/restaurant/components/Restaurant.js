import React, { Component } from "react"
import Sidebar from "../../../../components/Sidebar"
import Mininavbar from "../../../../components/Mininavbar"
import "../css/Restaurant.css"

class Restaurant extends Component{

   render(){

      return(
         <div className="Restaurant-main-container">
            <Sidebar name={this.props.name}/>
            <Mininavbar name={this.props.name}/>
         </div>
      )
   }
}

export default Restaurant