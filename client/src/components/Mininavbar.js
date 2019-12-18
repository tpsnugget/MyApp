import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../css/Mininavbar.css"

class Mininavbar extends Component {

   render() {

      const newPath = `/${this.props.name.toLowerCase()}/new`
      const editPath = `/${this.props.name.toLowerCase()}/edit`
      const deletePath = `/${this.props.name.toLowerCase()}/delete`

      return (
         <div className="Mininavbar-main-container">
            <div className="Mininavbar-div">
               <Link
                  to={newPath}
                  className="Mininavbar-link-new"
               >
                  Add New {this.props.name}
            </Link>
            </div>

            <div className="Mininavbar-div">
               <Link
                  to={editPath}
                  className="Mininavbar-link-new"
               >
                  Edit {this.props.name}
            </Link>
            </div>

            <div className="Mininavbar-div">
               <Link
                  to={deletePath}
                  className="Mininavbar-link-new"
               >
                  Delete {this.props.name}
            </Link>
            </div>
         </div>
      )
   }
}

export default Mininavbar