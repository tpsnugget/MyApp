/* RV LANDING PAGE */

import React, { Component } from "react"
import Sidebar from "../../components/Sidebar"
import Mininavbar from "../../components/Mininavbar"
import "../css/RV.css"


class RV extends Component{

   render(){
      return(
         <div className="RV-main-container">
            <Sidebar />
            <Mininavbar name={this.props.name}/>
         </div>
      )
   }
}

export default RV