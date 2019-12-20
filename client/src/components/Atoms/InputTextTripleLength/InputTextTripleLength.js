import React, { Component } from "react"
import PropTypes from "prop-types"
import "./InputTextTripleLength.css"

class InputTextTripleLength extends Component {

   static propTypes = {
      /* Used for CSS styling */
      className: PropTypes.string,

      /* Used for CSS styling */
      spanClassName: PropTypes.string,

      /* Used for CSS styling */
      inputClassName: PropTypes.string,

      /* input type = text, password, ... */
      type: PropTypes.string,

      /* name is from the Parent state */
      name: PropTypes.string,

      /* label is what is displayed on top of the input box for the user */
      label: PropTypes.string
   }

   constructor(props){
      super(props)
      this.handleChangeHere = this.handleChangeHere.bind(this)
   }

   handleChangeHere(e){
      e.preventDefault()
      this.props.handleChange(e)
   }

   render() {

      const { className, spanClassName, inputClassName, type, name, label } = this.props

      return (
         <label className={className}><span className={spanClassName}>{label}</span>
            <div>
               <input
                  type={type}
                  name={name}
                  className={inputClassName}
                  onChange={this.handleChangeHere}
               />
            </div>
         </label>
      )
   }
}

export default InputTextTripleLength