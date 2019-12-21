/* RECiPE LANDING PAGE */

import React, { Component } from "react"
import PropTypes from "prop-types"
import Sidebar from "../../../../components/Sidebar"
import Mininavbar from "../../../../components/Mininavbar"
import CancelLink from "../../../Atoms/CancelLink/CancelLink"

import "../css/Recipe.css"


class Recipe extends Component{

   static propTypes = {
      /* name comes from App.js, sent to Sidebar and Mininavbar */
      name: PropTypes.string,

      /* Passed down from App.js. Used to determine if active user is the one
         who added the selected RECIPE to the db. They are the only one who can
         Edit or Delete the selected RECIPE. */
      loggedInName: PropTypes.string
   }

   constructor(props){
      super(props)
      this.state = {
         chosenId: "",
         data: []
      }
   }

   render(){

      const { name } = this.props
      const { chosenId } = this.state

      return(
         <div className="Recipe-main-container">
            <div className="Recipe-nav-container">
               <Sidebar name={name} select={this.handleClick} />
               <div className="Recipe-inner-container">
                  <Mininavbar name={name} chosenId={chosenId} />
                  <div>
                     {/* {(chosenId !== "") && <RecipeShow data={data} />} */}
                  </div>
                  <div className="Recipe-cancel">
                     <CancelLink />
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Recipe