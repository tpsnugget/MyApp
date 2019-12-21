/* BEER LANDING PAGE */

import React, { Component } from "react"
import axios from "axios"
import PropTypes from "prop-types"
import Sidebar from "../../../../components/Sidebar"
import Mininavbar from "../../../../components/Mininavbar"
import Cancel from "../../../../components/Cancel"
import "../css/Beer.css"


class Beer extends Component {

   static propTypes = {
      /* name comes from App.js, sent to Sidebar and Mininavbar */
      name: PropTypes.string,

      /* Passed down from App.js. Used to determine if active user is the one
         who added the selected beer to the db. They are the only one who can
         Edit or Delete the selected beer. */
      loggedInName: PropTypes.string
   }

   constructor(props){
      super(props)
      this.state = {
         chosenID: "",
         data: []
      }
      this.handleClick = this.handleClick.bind(this)
   }

   handleClick(e){
      // console.log("Beer Component, e: ", e)
      this.setState({
         chosenID: e
      })

      axios.get("http://localhost:9000/beer", {
         params: { 
            _id: e
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

      const { addedBy } = this.state.data
      const { loggedInName } = this.props


      console.log("Beer Component, addedBy: ", addedBy)
      console.log("Beer Component, loggedInName: ", loggedInName)

      const allowedToModifySelection = (addedBy === loggedInName ? true : false)

      return (
         <div className="Beer-main-container">
            <Sidebar name={this.props.name} select={this.handleClick}/>
            <Mininavbar name={this.props.name} chosenID={this.state.chosenID} allowedToModifySelection={allowedToModifySelection}/>
            <div className="Beer-cancel">
               <Cancel />
            </div>
         </div>
      )
   }
}

export default Beer