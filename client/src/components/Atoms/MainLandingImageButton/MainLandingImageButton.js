import React, { Component } from "react"
import { Link } from "react-router-dom"

class MainLandingImageButton extends Component{

   render(){

      const path = `/${this.props.label}`

      return(
         <div className="Landing-button">
            <p className="Landing-title">{this.props.label}</p>
            <Link to={path}>
               <img
                  className="Landing-img"
                  src={this.props.src}
                  alt={this.props.label} />
            </Link>
         </div>
      )
   }
}

export default MainLandingImageButton