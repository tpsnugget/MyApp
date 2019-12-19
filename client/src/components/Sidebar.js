import React, { Component } from "react"
import "../css/Sidebar.css"

class Sidebar extends Component{

   render(){
      return(
         <div className="Sidebar-main-container">
            <h1 className="Sidebar-h1">{this.props.name}</h1>
         </div>
      )
   }
}

export default Sidebar