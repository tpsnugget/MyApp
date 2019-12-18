import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../css/Cancel.css"

class Cancel extends Component {

   render() {
      return (
         <div className="Cancel-div">
            <Link to="/landing" className="Cancel-link">
               <button className="Cancel-button">
                  Cancel
               </button>
            </Link>
         </div>
      )
   }
}

export default Cancel