import React, { Component } from "react"
import PropTypes from "prop-types"
import LinkButton from "./Atoms/LinkButton/LinkButton"
import "../css/Mininavbar.css"

class Mininavbar extends Component {

   static propTypes = {
      /* Passed down from one of the four main landing pages. Used to complete
         the path, and used on part of the button face on the LinkButton Atom */
      name: PropTypes.string,

      /* Passed down from one of the four main landing pages.
         Use to customize the Mininavbar */
      chosenID: PropTypes.string,

      /* Passed down from one of the four main landing pages.
         Used to customize the Mininavbar */
      allowedToModifySelection: PropTypes.bool
   }

   render() {

      const { allowedToModifySelection } = this.props

      const newPath = `/${this.props.name.toLowerCase()}/new`
      const editPath = `/${this.props.name.toLowerCase()}/edit`
      const deletePath = `/${this.props.name.toLowerCase()}/delete`

      return (
         <div className="Mininavbar-main-container">

         <LinkButton newPath={newPath} name={this.props.name} buttonLabel="Add New"/>
         {allowedToModifySelection && <LinkButton newPath={editPath} name={this.props.name} buttonLabel="Edit"/>}
         {allowedToModifySelection && <LinkButton newPath={deletePath} name={this.props.name} buttonLabel="Delete"/>}

         </div>
      )
   }
}

export default Mininavbar