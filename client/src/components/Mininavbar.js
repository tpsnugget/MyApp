import React, { Component } from "react"
import LinkButton from "./Atoms/LinkButton/LinkButton"
import "../css/Mininavbar.css"

class Mininavbar extends Component {

   render() {

      const newPath = `/${this.props.name.toLowerCase()}/new`
      const editPath = `/${this.props.name.toLowerCase()}/edit`
      const deletePath = `/${this.props.name.toLowerCase()}/delete`

      return (
         <div className="Mininavbar-main-container">

         <LinkButton newPath={newPath} name={this.props.name} buttonLabel="Add New"/>
         <LinkButton newPath={editPath} name={this.props.name} buttonLabel="Edit"/>
         <LinkButton newPath={deletePath} name={this.props.name} buttonLabel="Delete"/>

         </div>
      )
   }
}

export default Mininavbar