import React, { Component, Fragment } from "react"
import { Redirect } from "react-router-dom"
import Snackbar from "./Snackbar"
import axios from "axios"
import "./Login.css"

class Login extends Component{

   constructor(props){
      super(props)
      this.state = {
         username: "",
         password: "",
         snackBarOpen: false,
         msg: "",
         goodLogin: false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(e){
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   handleSubmit(e){
      e.preventDefault()

      axios.get("http://localhost:9000/users", {
         params: {
            username: this.state.username.toLowerCase()
         }
      })
         .then( (response) => {
            console.log("Login Component received response: ", response)

            if(response.data._id){
               if(response.data.password === this.state.password){
                  this.setState({
                     snackBarOpen: true,
                     msg: "Login was successful"
                  })
                  setTimeout(() => {
                     this.setState({
                        snackBarOpen: false,
                        msg: "",
                        goodLogin: true
                     })
                  }, 2000);
               }
               else{
                  this.setState({
                     snackBarOpen: true,
                     msg: "Login not successful"
                  })
                  setTimeout(() => {
                     this.setState({
                        snackBarOpen: false,
                        msg: ""
                     })
                  }, 2000);
               }
            }
            else if(response.data === ""){
               this.setState({
                  snackBarOpen: true,
                  msg: "Login not successful"
               })
               setTimeout(() => {
                  this.setState({
                     snackBarOpen: false,
                     msg: ""
                  })
               }, 2000);
            }

         } )
         .catch( (error) => {
            console.error("Login Component received error: ", error)
         })
   }

   render(){

      const { snackBarOpen, goodLogin } = this.state

      return(
         <Fragment>
            {goodLogin && <Redirect to="/landing" />}
         <div className="Login">
            <div className="Login-header">
               <h4 className="Login-header-h4">Login</h4>
            </div>
            <div className="Login-main-div">
               <form onSubmit={this.handleSubmit}>

                  <div className="Login-row">
                     <span className="Login-inner-span">
                        <label className="Login-label">
                           Username:
                  <div><input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                           </div>
                        </label>
                     </span>
                     <span className="Login-inner-span">
                        <label className="Login-label">
                           Password:
                  <div><input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                           </div>
                        </label>
                     </span>
                  </div>

                  <button>Submit</button>
               </form>
            </div>
         </div>
         {snackBarOpen && <Snackbar msg={this.state.msg} />}
         </Fragment>
      )
   }
}

export default Login