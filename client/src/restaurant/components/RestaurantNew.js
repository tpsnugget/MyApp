/* Add a New Restauratn PAGE */

import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import Cancel from "../../components/Cancel"
import Snackbar from "../../components/Snackbar"
import axios from "axios"
import "../css/RestaurantNew.css"


class RestaurantNew extends Component {

   constructor(props) {
      super(props)
      this.state = {
         name: "",
         streetAddress: "",
         city: "",
         state: "",
         zip: "",
         phone: "",
         latitude: "",
         longitude: "",
         image: "",
         website: "",
         rating: "",
         snackBarOpen: false,
         msg: "",
         addRestaurantSuccessful: false
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

      const newRestaurant = {
         name: this.state.name,
         streetAddress: this.state.streetAddress,
         city: this.state.city,
         state: this.state.state,
         zip: this.state.zip,
         phone: this.state.phone,
         latitude: this.state.latitude,
         longitude: this.state.longitude,
         image: this.state.image,
         website: this.state.website,
         rating: this.state.rating
      }

      axios.post("http://localhost:9000/restaurant", newRestaurant)
         .then((response) => {
            console.log(response)
            if (response.data.name === "MongoError") {
               this.setState({
                  snackBarOpen: true,
                  msg: "Restaurant was not added..."
               })
               setTimeout(() => {
                  this.setState({
                     snackBarOpen: false,
                     msg: ""
                  })
               }, 2000);
            } else {
               this.setState({
                  snackBarOpen: true,
                  msg: "Restaurant was added!"
               })
               setTimeout(() => {
                  this.setState({
                     snackBarOpen: false,
                     msg: "",
                     addRestaurantSuccessful: true
                  })
               }, 2000);
            }
         })
         .catch((err) => console.log(err))
   }

   render() {

      const { addRestaurantSuccessful, snackBarOpen } = this.state

      return (
         <div className="RestaurantNew-main-container">
            {addRestaurantSuccessful && <Redirect to="/restaurant" />}
            <div className="RestaurantNew-form-container">
               <h1 className="RestaurantNew-h1">Add a New Restaurant</h1>
               <form
                  className="RestaurantNew-form"
                  onSubmit={this.handleSubmit}
               >


                  <div className="RestaurantNew-div-row">
                     <label className="RestaurantNew-label"><span className="RestaurantNew-span">Restaurant Name:</span>
                        <div>
                           <input
                              type="text"
                              name="name"
                              className="RestaurantNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>

                     {/* <label className="RestaurantNew-label"><span className="RestaurantNew-span">Brewery Name:</span>
                        <div>
                           <input
                              type="text"
                              name="brewery"
                              className="RestaurantNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label> */}
                  </div>

                  <div className="RestaurantNew-div-row">
                     <label className="RestaurantNew-label"><span className="RestaurantNew-span">Street Address:</span>
                        <div>
                           <input
                              type="text"
                              name="streetAddress"
                              className="RestaurantNew-input-address RestaurantNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                  </div>

                  <div className="RestaurantNew-div-row">
                     <label className="RestaurantNew-label"><span className="RestaurantNew-span">City:</span>
                        <div>
                           <input
                              type="text"
                              name="city"
                              className="RestaurantNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                     <label className="RestaurantNew-label"><span className="RestaurantNew-span">State:</span>
                        <div>
                           <input
                              type="text"
                              name="state"
                              className="RestaurantNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                     <label className="RestaurantNew-label"><span className="RestaurantNew-span">Zip Code:</span>
                        <div>
                           <input
                              type="text"
                              name="zip"
                              className="RestaurantNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                  </div>

                  <div className="RestaurantNew-div-row">
                  <label className="RestaurantNew-label"><span className="RestaurantNew-span">Phone:</span>
                        <div>
                           <input
                              type="text"
                              name="phone"
                              className="RestaurantNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                     <label className="RestaurantNew-label"><span className="RestaurantNew-span">Latitude:</span>
                        <div>
                           <input
                              type="text"
                              name="latitude"
                              className="RestaurantNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                     <label className="RestaurantNew-label"><span className="RestaurantNew-span">Longitude:</span>
                        <div>
                           <input
                              type="text"
                              name="longitude"
                              className="RestaurantNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                  </div>

                  <div className="RestaurantNew-div-row">
                     <label className="RestaurantNew-label"><span className="RestaurantNew-span">Restaurant Image URL:</span>
                        <div>
                           <input
                              type="text"
                              name="image"
                              className="RestaurantNew-input-image RestaurantNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                  </div>

                  <div className="RestaurantNew-div-row">
                     <label className="RestaurantNew-label"><span className="RestaurantNew-span">Website URL:</span>
                        <div>
                           <input
                              type="text"
                              name="website"
                              className="RestaurantNew-input-image RestaurantNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                  </div>

                  <div className="RestaurantNew-div-row">
                     {/* <label className="RestaurantNew-label"><span className="RestaurantNew-span">ABV:</span>
                        <div>
                           <input
                              type="text"
                              name="abv"
                              className="RestaurantNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                     <label className="RestaurantNew-label"><span className="RestaurantNew-span">IBU:</span>
                        <div>
                           <input
                              type="text"
                              name="ibu"
                              className="RestaurantNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label> */}
                     <label className="RestaurantNew-label"><span className="RestaurantNew-span">Rating:</span>
                        <div>
                           <input
                              type="text"
                              name="rating"
                              className="RestaurantNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                  </div>

                  <div className="RestaurantNew-div-row">
                     <button className="RestaurantNew-submit-button">Submit</button>
                  </div>

               </form>
            </div>

            <div>
               <Cancel />
            </div>
            {snackBarOpen && <Snackbar msg={this.state.msg} />}
         </div >
      )
   }
}

export default RestaurantNew