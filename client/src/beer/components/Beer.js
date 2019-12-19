/* BEER LANDING PAGE */

import React, { Component } from "react"
import Sidebar from "../../components/Sidebar"
import Mininavbar from "../../components/Mininavbar"
import Cancel from "../../components/Cancel"
import "../css/Beer.css"


class Beer extends Component {

   constructor(props){
      super(props)
      this.state = {
         
      }
   }

   render() {
      return (
         <div className="Beer-main-container">
            <Sidebar name={this.props.name}/>
            <Mininavbar name={this.props.name} />
            <div className="Beer-cancel">
               <Cancel />
            </div>
         </div>
      )
   }
}

export default Beer