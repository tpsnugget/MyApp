import React, { Component } from "react"
import PropTypes from "prop-types"

import Sidebar from "../../../../components/Sidebar"
import Mininavbar from "../../../../components/Mininavbar"
import "../css/Restaurant.css"

class Restaurant extends Component{

   static propTypes = {
      /* name comes from App.js, sent to Sidebar and Mininavbar */
      name: PropTypes.string
   }

   constructor(props){
      super(props)
      this.state = {
         chosenID: ""
      }
      this.handleClick = this.handleClick.bind(this)
   }

   handleClick(){

   }

   render(){

      return(
         <div className="Restaurant-main-container">
            <Sidebar name={this.props.name}/>
            <Mininavbar name={this.props.name}/>
         </div>
      )
   }
}

export default Restaurant