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
         favFood: "",
         rating: "",
         cuisine: "",
         price: "",
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
         favFood: this.state.favFood,
         rating: this.state.rating,
         cuisine: this.state.cuisine,
         price: this.state.price,
         addedBy: this.props.username
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

                     <label className="RestaurantNew-label"><span className="RestaurantNew-span">Favorite Food:</span>
                        <div>
                           <input
                              type="text"
                              name="favFood"
                              className="RestaurantNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
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
                     <label className="BeerNew-label"><span className="BeerNew-span">Cuisine:</span>
                        <div>
                           <select
                              type="text"
                              name="cuisine"
                              className="BeerNew-select"
                              onChange={this.handleChange}>
                              <option value="">Select a Cuisine</option>
                              <option value="american">American</option>
                              <option value="cajun">Cajun</option>
                              <option value="french">French</option>
                              <option value="german">German</option>
                              <option value="indian">Indian</option>
                              <option value="italian">Italian</option>
                              <option value="japanese">Japanese</option>
                              <option value="korean">Korean</option>
                              <option value="mexican">Mexican</option>
                              <option value="spanish">Spanish</option>
                              <option value="thai">Thai</option>
                           </select>
                        </div>
                     </label>
                     <label className="BeerNew-label"><span className="BeerNew-span">Cost:</span>
                        <div>
                           <select
                              type="text"
                              name="price"
                              className="BeerNew-select"
                              onChange={this.handleChange}>
                              <option value="">Total Price Per Person</option>
                              <option value="under10">Less than $10 each</option>
                              <option value="under15">Less than $15 each</option>
                              <option value="under20">Less than $20 each</option>
                              <option value="under25">Less than $25 each</option>
                              <option value="under30">Less than $30 each</option>
                              <option value="under35">Less than $35 each</option>
                              <option value="under40">Less than $40 each</option>
                              <option value="under45">Less than $45 each</option>
                              <option value="under50">Less than $50 each</option>
                              <option value="over50">More than $50 each</option>
                           </select>
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