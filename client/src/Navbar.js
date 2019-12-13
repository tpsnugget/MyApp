import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

class Navbar extends Component {

   render() {

      const loginSignup =
         <div className="Navbar-right">
            <Link to="/login" className="Navbar-right-links">Login</Link>
            <Link to="/user" className="Navbar-right-links">Signup</Link>
         </div>

      const logout =
         <div className="Navbar-right">
            <Link to="/login" className="Navbar-right-links">Logout</Link>
         </div>

      const { isLoggedIn, loggedInName } = this.props

      return (
         <div className="Navbar">
            <div className="Navbar-left">
               {isLoggedIn ? <span>You are logged in as: {loggedInName} </span> : <span>Please Login or Signup</span>}
            </div>
            {isLoggedIn ? logout : loginSignup}
         </div >
      )
   }
}

export default Navbar