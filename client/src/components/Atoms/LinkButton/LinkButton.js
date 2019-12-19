import React, { Component } from "react"
import { Link } from "react-router-dom"

class LinkButton extends Component {

   render() {
      return (
         <div className="Mininavbar-div">
            <Link
               to={this.props.newPath}
               className="Mininavbar-link-new"
            >
               {this.props.buttonLabel} {this.props.name}
            </Link>
         </div>
      )
   }
}

export default LinkButton