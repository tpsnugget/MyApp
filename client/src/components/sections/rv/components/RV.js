/* RV LANDING PAGE */

import React, { Component } from "react"
import axios from "axios"
import PropTypes from "prop-types"
import Sidebar from "../../../../components/Sidebar"
import Mininavbar from "../../../../components/Mininavbar"
import CancelLink from "../../../Atoms/CancelLink/CancelLink"
import RVShow from "./RVShow"
import "../css/RV.css"


class RV extends Component {

   static propTypes = {
      /* name comes from App.js, sent to Sidebar and Mininavbar */
      name: PropTypes.string,

      /* Passed down from App.js. Used to determine if active user is the one
   who added the selected RESTAURANT to the db. They are the only one who can
   Edit or Delete the selected RESTAURANT. */
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
      this.setState({
         chosenId: id
      })

      axios.get("http://localhost:9000/rv", {
         params: {
            _id: id
         }
      })
         .then((response) => {
            if (response.data === "") {
               console.log("axios.get not in the db")
            } else {
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
         <div className="RV-main-container">
            <div className="RV-nav-container">
               <Sidebar name={name} select={this.handleClick} />
               <div className="RV-inner-container">
                  <Mininavbar name={name} chosenId={chosenId} allowedToModifySelection={allowedToModifySelection} />
                  <div>
                     {(chosenId !== "") && <RVShow data={data} />}
                  </div>
                  <div className="RV-cancel">
                     <CancelLink />
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default RV