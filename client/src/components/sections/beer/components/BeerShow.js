import React, { Component } from "react"
import PropTypes from "prop-types"

class BeerShow extends Component{

   static propTypes = {
      /* Passed down from Beer.js
         Used here to show all the data for one selected Beer */
      data: PropTypes.object
   }

   render(){

      const { name, brewery } = this.props.data

      return(
         <div className="BeerShow-main-container">
            <h1>{name}</h1>
            <h2>{brewery}</h2>
         </div>
      )
   }
}

export default BeerShow