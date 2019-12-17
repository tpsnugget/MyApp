/* BEER LANDING PAGE */

import React, { Component } from "react"
import Sidebar from "../../components/Sidebar"
import "../css/Beer.css"


class Beer extends Component{

   render(){
      return(
         <div className="Beer-main-container">
            <Sidebar />
            <h1>Beer Landing page is up Man!</h1>
         </div>
      )
   }
}

export default Beer