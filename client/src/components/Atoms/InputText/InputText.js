import React, { Component } from "react"
import PropTypes from "prop-types"

class InputText extends Component {

   static propTypes = {

   }

   render() {

      const { type, name, handleChange } = this.props

      return (
         <label className="BeerNew-label"><span className="BeerNew-span">Beer Name:</span>
            <div>
               <input
                  type={type}
                  name={name}
                  className="BeerNew-input"
                  onChange={handleChange}
               />
            </div>
         </label>
      )
   }
}

export default InputText