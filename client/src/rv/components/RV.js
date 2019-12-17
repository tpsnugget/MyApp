/* RV LANDING PAGE */

import React, { Component } from "react"
import Sidebar from "../../components/Sidebar"
import "../css/RV.css"


class RV extends Component{

   render(){
      return(
         <div className="RV-main-container">
            <Sidebar />
            <h1>RV Landing page is up Man!</h1>
         </div>
      )
   }
}

export default RV