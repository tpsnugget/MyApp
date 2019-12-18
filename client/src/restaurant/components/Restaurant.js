import React, { Component } from "react"
import Sidebar from "../../components/Sidebar"
import Mininavbar from "../../components/Mininavbar"
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
            <Mininavbar name={this.props.name}/>
         </div>
      )
   }
}

export default Restaurant