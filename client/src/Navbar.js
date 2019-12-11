import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

class Navbar extends Component {

   render() {

      const { isLoggedIn } = this.props

      return (
         <div className="Navbar">
            <div className="Navbar-left">
               {isLoggedIn ? <span>You are logged in as: </span> : <span>Please Login or Signup</span>}
         </div>
         <div className="Navbar-right">
            <Link className="Navbar-right-links">Login</Link>
            <Link className="Navbar-right-links">Signup</Link>
         </div>
         </div >
      )
   }
}

export default Navbar