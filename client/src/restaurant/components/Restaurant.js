import React, { Component } from "react"
import Sidebar from "../../components/Sidebar"
import "../css/Restaurant.css"

class Restaurant extends Component{

   constructor(props){
      super(props)
      this.state = {

      }
   }

   render(){

      return(
         <div className="Restaurant-main-container">
            <Sidebar />
            <h1>Restaurant Landing page is up man!</h1>
         </div>
      )
   }
}

export default Restaurant