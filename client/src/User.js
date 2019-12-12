import React, { Component } from "react"
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
         password2: ""
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
      .then( (response) => {
         console.log("User Component response: ", response)
      } )
      .catch( (error) => {
         console.error("User Component error: ", error)
      } )
   }

   render() {

      // const { isLoggedIn } = this.props

      return (
         <div className="User">
            <h1>Signup Page is up Man!</h1>
            <form onSubmit={this.handleSubmit}>
               <div className="User-div">
                  <label>
                     First Name:
                  <input type="text" name="first" onChange={this.handleChange} />
                  </label>
               </div>
               <div className="User-div">
                  <label>
                     Last Name:
                  <input type="text" name="last" onChange={this.handleChange} />
                  </label>
               </div>
               <div className="User-div">
                  <label>
                     Username:
                  <input type="text" name="username" onChange={this.handleChange} />
                  </label>
               </div>
               <div className="User-div">
                  <label>
                     Email:
                  <input type="email" name="email" onChange={this.handleChange} />
                  </label>
               </div>
               <div className="User-div">
                  <label>
                     Password:
                  <input type="password" name="password" onChange={this.handleChange} />
                  </label>
               </div>
               <div className="User-div">
                  <label>
                     Re-enter Password:
                  <input type="password" name="password2" onChange={this.handleChange} />
                  </label>
               </div>
               <button>Submit</button>
            </form>
         </div>
      )
   }
}

export default User