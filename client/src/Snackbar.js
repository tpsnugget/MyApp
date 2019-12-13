import React, { Component } from "react"
import "./Snackbar.css"

class Snackbar extends Component{

   render(){

      return(
         <div className="Snackbar">
            <p>{this.props.msg}</p>
         </div>
      )
   }
}

export default Snackbar