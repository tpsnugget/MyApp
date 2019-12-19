/* RV LANDING PAGE */

import React, { Component } from "react"
import Sidebar from "../../components/Sidebar"
import Mininavbar from "../../components/Mininavbar"
import "../css/RV.css"


class RV extends Component{

   constructor(props){
      super(props)
      this.state = {
         
      }
   }

   render(){
      return(
         <div className="RV-main-container">
            <Sidebar name={this.props.name}/>
            <Mininavbar name={this.props.name}/>
         </div>
      )
   }
}

export default RV