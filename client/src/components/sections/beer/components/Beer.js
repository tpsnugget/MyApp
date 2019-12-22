/* BEER LANDING PAGE */

import React, { Component } from "react"
import axios from "axios"
import PropTypes from "prop-types"
import Sidebar from "../../../../components/Sidebar"
import Mininavbar from "../../../../components/Mininavbar"
import CancelLink from "../../../Atoms/CancelLink/CancelLink"
import BeerShow from "./BeerShow"
import "../css/Beer.css"


class Beer extends Component {

   static propTypes = {
      /* name comes from App.js, sent to Sidebar and Mininavbar */
      name: PropTypes.string,

      /* Passed down from App.js. Used to determine if active user is the one
         who added the selected BEER to the db. They are the only one who can
         Edit or Delete the selected BEER. */
      loggedInName: PropTypes.string
   }

   constructor(props) {
      super(props)
      this.state = {
         chosenId: "",
         data: []
      }
      this.handleClick = this.handleClick.bind(this)
   }

   handleClick(id) {
      // console.log("Beer Component, e: ", e)
      this.setState({
         chosenId: id
      })

      axios.get("http://localhost:9000/beer", {
         params: {
            _id: id
         }
      })
         .then((response) => {
            if (response.data === "") {
               console.log("axios.get not in the db")
            } else {
               // console.log("axios.get /beer params: {}, response: ", response)
               this.setState({
                  data: response.data[0]
               })
            }
         })
         .catch((err) => console.log(err))
   }

   render() {

      const { chosenId, data } = this.state
      const { addedBy } = this.state.data
      const { loggedInName, name } = this.props

      const allowedToModifySelection = (addedBy === loggedInName ? true : false)

      return (
         <div className="Beer-main-container">
            <div className="Beer-nav-container">
               <Sidebar name={name} select={this.handleClick} />
               <div className="Beer-inner-container">
                  <Mininavbar name={name} chosenId={chosenId} allowedToModifySelection={allowedToModifySelection} />
                  <div>
                     {(chosenId !== "") && <BeerShow data={data} />}
                  </div>
                  <div className="Beer-cancel">
                     <CancelLink />
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Beer