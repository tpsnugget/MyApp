import React, { Component } from "react"

class New extends Component{

   constructor(props){
      super(props)
      this.state = {
         name: "",
         address: "",
         city: "",
         state: "",
         zip: ""
      }
   }

   render(){
      return(
         <div>
            <h1>New Restaurant Page is up Man!</h1>
         </div>
      )
   }
}

export default New