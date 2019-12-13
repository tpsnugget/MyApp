import React, { Component } from "react"
import "./Login.css"

class Login extends Component{

   constructor(props){
      super(props)
      this.state = {

      }
   }

   render(){
      return(
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
      )
   }
}

export default Login