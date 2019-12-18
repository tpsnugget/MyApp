/* BEER LANDING PAGE */

import React, { Component } from "react"
import Sidebar from "../../components/Sidebar"
import Mininavbar from "../../components/Mininavbar"
import "../css/Beer.css"


class Beer extends Component{

   render(){
      return(
         <div className="Beer-main-container">
            <Sidebar />
            <Mininavbar name={this.props.name}/>
         </div>
      )
   }
}

export default Beer