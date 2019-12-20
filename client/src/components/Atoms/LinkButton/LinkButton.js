import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./LinkButton.css"

class LinkButton extends Component {

   static propTypes = {
      /* path for the Link from react-router-dom */
      newPath: PropTypes.string,
      /* label for the button face (left side of the text) */
      label: PropTypes.string,
      /* label for the button face (right side of the text) */
      /* Beer, Recipe, Restaurant, RV */
      name: PropTypes.string
   }

   render() {

      const { newPath, buttonLabel, name } = this.props

      return (
         <div className="LinkButton-div">
            <Link
               to={newPath}
               className="LinkButton-link-new"
            >
               {buttonLabel} {name}
            </Link>
         </div>
      )
   }
}

export default LinkButton