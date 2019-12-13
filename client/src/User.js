import React, { Component, Fragment } from "react"
import { Redirect } from "react-router-dom"
import Snackbar from "./Snackbar"
import axios from "axios"
import "./User.css"

class User extends Component {

   constructor(props) {
      super(props)
      this.state = {
         first: "",
         last: "",
         username: "",
         email: "",
         password: "",
         password2: "",
         snackBarOpen: false,
         msg: "",
         goodLogin: false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(e) {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   handleSubmit(e) {
      e.preventDefault()
      axios.post("http://localhost:9000/users", {
         first: this.state.first,
         last: this.state.last,
         username: this.state.username.toLowerCase(),
         email: this.state.email.toLowerCase(),
         password: this.state.password
      })
         .then((response) => {
            console.log("User Component response: ", response)
            if (response.data._id) {
               this.setState({
                  snackBarOpen: true,
                  msg: "Signup Successful"
               })
               setTimeout(() => {
                  this.setState({
                     snackBarOpen: false,
                     msg: "",
                     goodLogin: true
                  })
               }, 2000);
            }
            else if (response.data.name === "MongoError") {
               this.setState({
                  snackBarOpen: true,
                  msg: "Those login credentials are already in use"
               })
               setTimeout(() => {
                  this.setState({
                     first: "",
                     last: "",
                     username: "",
                     email: "",
                     password: "",
                     password2: "",
                     snackBarOpen: false,
                     msg: ""
                  })
               }, 2000);
            }
            else if (response.data._message === "User validation failed") {
               this.setState({
                  snackBarOpen: true,
                  msg: "An error occurred during signup"
               })
               setTimeout(() => {
                  this.setState({
                     first: "",
                     last: "",
                     username: "",
                     email: "",
                     password: "",
                     password2: "",
                     snackBarOpen: false,
                     msg: ""
                  })
               }, 2000);
            }
         })
         .catch((error) => {
            console.error("User Component error: ", error)
         })
   }

   render() {

      // const { isLoggedIn } = this.props
      const { first, last, username, email, password, password2, goodLogin } = this.state

      return (
         <Fragment>
            {goodLogin && <Redirect to="/login" />}
            <div className="User">
               <div className="User-header">
                  <h4 className="User-header-h4">Signup</h4>
               </div>
               <div className="User-main-div">
                  <form onSubmit={this.handleSubmit}>

                     <div className="User-row">
                        <span className="User-inner-span">
                           <label className="User-label">
                              First Name:
                           <div>
                                 <input type="text" name="first" value={first} placeholder="First Name" onChange={this.handleChange} />
                              </div>
                           </label>
                        </span>
                        <span className="User-inner-span">
                           <label className="User-label">
                              Last Name:
                  <div><input type="text" name="last" value={last} placeholder="Last Name" onChange={this.handleChange} />
                              </div>
                           </label>
                        </span>
                     </div>

                     <div className="User-row">
                        <span className="User-inner-span">
                           <label className="User-label">
                              Username:
                  <div><input type="text" name="username" value={username} placeholder="Username" onChange={this.handleChange} />
                              </div>
                           </label>
                        </span>
                        <span className="User-inner-span">
                           <label className="User-label">
                              Email:
                  <div><input type="email" name="email" value={email} placeholder="Email" onChange={this.handleChange} />
                              </div>
                           </label>
                        </span>
                     </div>

                     <div className="User-row">
                        <span className="User-inner-span">
                           <label className="User-label">
                              Password:
                  <div><input type="password" name="password" value={password} placeholder="Password" onChange={this.handleChange} />
                              </div>
                           </label>
                        </span>
                        <span className="User-inner-span">
                           <label className="User-label">
                              Re-enter Password:
                  <div><input type="password" name="password2" value={password2} placeholder="Password" onChange={this.handleChange} />
                              </div>
                           </label>
                        </span>
                     </div>
                     <button>Submit</button>
                  </form>
               </div>
            </div>
            {this.state.snackBarOpen && <Snackbar msg={this.state.msg} />}
         </Fragment>
      )
   }
}

export default User