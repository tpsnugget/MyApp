import React, { Component } from "react"
import axios from "axios"
import "../css/Sidebar.css"

class Sidebar extends Component{

   constructor(props){
      super(props)
      this.state = {
         data: []
      }
   }

   componentDidMount(){

      const url = `http://localhost:9000/${this.props.name.toLowerCase()}`

      axios.get(url, {
         params: {  }
      })
         .then((response) => {
            if (response.data === "") {
               console.log("axios.get not in the db")
            } else {
               console.log("axios.get /beer params: {}, response: ", response)
               this.setState({
                  data: response.data
               })
            }
         })
         .catch((err) => console.log(err))
   }

   render(){

      return(
         <div className="Sidebar-main-container">
            <h1 className="Sidebar-h1">{this.props.name}</h1>
         </div>
      )
   }
}

export default Sidebar