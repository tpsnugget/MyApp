/* Add a New BEER PAGE */

import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import Cancel from "../../components/Cancel"
import Snackbar from "../../components/Snackbar"
import axios from "axios"
import "../css/BeerNew.css"


class BeerNew extends Component {

   constructor(props) {
      super(props)
      this.state = {
         name: "",
         brewery: "",
         streetAddress: "",
         city: "",
         state: "",
         zip: "",
         phone: "",
         latitude: "",
         longitude: "",
         image: "",
         website: "",
         beerType: "",
         beerColor: "",
         glassware: "",
         abv: "",
         ibu: "",
         rating: "",
         snackBarOpen: false,
         msg: "",
         addBeerSuccessful: false
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

      const newBeer = {
         name: this.state.name,
         brewery: this.state.brewery,
         streetAddress: this.state.streetAddress,
         city: this.state.city,
         state: this.state.state,
         zip: this.state.zip,
         phone: this.state.phone,
         latitude: this.state.latitude,
         longitude: this.state.longitude,
         image: this.state.image,
         website: this.state.website,
         beerType: this.state.beerType,
         beerColor: this.state.beerColor,
         glassware: this.state.glassware,
         abv: this.state.abv,
         ibu: this.state.ibu,
         rating: this.state.rating
      }

      axios.post("http://localhost:9000/beer", newBeer)
         .then((response) => {
            console.log(response)
            if (response.data.name === "MongoError") {
               this.setState({
                  snackBarOpen: true,
                  msg: "Beer was not added..."
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
                  msg: "Beer was added!"
               })
               setTimeout(() => {
                  this.setState({
                     snackBarOpen: false,
                     msg: "",
                     addBeerSuccessful: true
                  })
               }, 2000);
            }
         })
         .catch((err) => console.log(err))
   }

   render() {

      const { addBeerSuccessful, snackBarOpen } = this.state

      return (
         <div className="BeerNew-main-container">
            {addBeerSuccessful && <Redirect to="/beer" />}
            <div className="BeerNew-form-container">
               <h1 className="BeerNew-h1">Add a New Beer</h1>
               <form
                  className="BeerNew-form"
                  onSubmit={this.handleSubmit}
               >


                  <div className="BeerNew-div-row">
                     <label className="BeerNew-label"><span className="BeerNew-span">Beer Name:</span>
                        <div>
                           <input
                              type="text"
                              name="name"
                              className="BeerNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>

                     <label className="BeerNew-label"><span className="BeerNew-span">Brewery Name:</span>
                        <div>
                           <input
                              type="text"
                              name="brewery"
                              className="BeerNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                  </div>

                  <div className="BeerNew-div-row">
                     <label className="BeerNew-label"><span className="BeerNew-span">Street Address:</span>
                        <div>
                           <input
                              type="text"
                              name="streetAddress"
                              className="BeerNew-input-address BeerNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                  </div>

                  <div className="BeerNew-div-row">
                     <label className="BeerNew-label"><span className="BeerNew-span">City:</span>
                        <div>
                           <input
                              type="text"
                              name="city"
                              className="BeerNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                     <label className="BeerNew-label"><span className="BeerNew-span">State:</span>
                        <div>
                           <input
                              type="text"
                              name="state"
                              className="BeerNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                     <label className="BeerNew-label"><span className="BeerNew-span">Zip Code:</span>
                        <div>
                           <input
                              type="text"
                              name="zip"
                              className="BeerNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                  </div>

                  <div className="BeerNew-div-row">
                  <label className="BeerNew-label"><span className="BeerNew-span">Phone:</span>
                        <div>
                           <input
                              type="text"
                              name="phone"
                              className="BeerNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                     <label className="BeerNew-label"><span className="BeerNew-span">Latitude:</span>
                        <div>
                           <input
                              type="text"
                              name="latitude"
                              className="BeerNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                     <label className="BeerNew-label"><span className="BeerNew-span">Longitude:</span>
                        <div>
                           <input
                              type="text"
                              name="longitude"
                              className="BeerNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                  </div>

                  <div className="BeerNew-div-row">
                     <label className="BeerNew-label"><span className="BeerNew-span">Beer Image URL:</span>
                        <div>
                           <input
                              type="text"
                              name="image"
                              className="BeerNew-input-image BeerNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                  </div>

                  <div className="BeerNew-div-row">
                     <label className="BeerNew-label"><span className="BeerNew-span">Website URL:</span>
                        <div>
                           <input
                              type="text"
                              name="website"
                              className="BeerNew-input-image BeerNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                  </div>

                  <div className="BeerNew-div-row">
                  <label className="BeerNew-label"><span className="BeerNew-span">Beer Type:</span>
                        <div>
                           <select
                              type="text"
                              name="beerType"
                              className="BeerNew-select"
                              onChange={this.handleChange}
                           >
                              <option value="">Select a Beer Type</option>
                              <option value="ale">Ale</option>
                              <option value="amberAle">Amber Ale</option>
                              <option value="blackIpa">Black IPA</option>
                              <option value="brownAle">Brown Ale</option>
                              <option value="creamStout">Cream Stout</option>
                              <option value="doubleIpa">Double IPA</option>
                              <option value="englishBitter">English Bitter</option>
                              <option value="englishSpecialBitter">English Special Bitter</option>
                              <option value="ipa">IPA</option>
                              <option value="paleAle">Pale Ale</option>
                              <option value="porter">Porter</option>
                              <option value="redAle">Red Ale</option>
                              <option value="scotchAle">Scotch Ale</option>
                              <option value="stout">Stout</option>
                              <option value="wheat">Wheat</option>
                           </select>
                        </div>
                     </label>
                     <label className="BeerNew-label"><span className="BeerNew-span">Beer Color:</span>
                        <div>
                           <select
                              type="text"
                              name="beerColor"
                              className="BeerNew-select"
                              onChange={this.handleChange}
                           >
                              <option value="">Select a Beer Color</option>
                              <option value="paleStraw">Pale Straw</option>
                              <option value="straw">Straw</option>
                              <option value="paleGold">Pale Gold</option>
                              <option value="deepGold">Deep Gold</option>
                              <option value="paleAmber">Pale Amber</option>
                              <option value="mediumAmber">Medium Amber</option>
                              <option value="deepAmber">Deep Amber</option>
                              <option value="amberBrown">Amber Brown</option>
                              <option value="brwon">Brown</option>
                              <option value="rubyBrown">Ruby Brown</option>
                              <option value="deepBrown">Deep Brown</option>
                              <option value="black">Black</option>
                           </select>
                        </div>
                     </label>
                     <label className="BeerNew-label"><span className="BeerNew-span">Recommended Glassware:</span>
                        <div>
                           <select
                              type="text"
                              name="glassware"
                              className="BeerNew-select"
                              onChange={this.handleChange}
                           >
                              <option value="">Select Proper Glassware</option>
                              <option value="goblet">Goblet</option>
                              <option value="imperial">Imperial</option>
                              <option value="krugMug">Krug Mug</option>
                              <option value="nonic">Nonic</option>
                              <option value="pilsner">Pilsner</option>
                              <option value="shaker">Shaker</option>
                              <option value="snifter">Snifter</option>
                              <option value="stange">Stange</option>
                              <option value="tankard">Tankard</option>
                              <option value="tulip">Tulip</option>
                              <option value="weiss">Weiss</option>
                           </select>
                        </div>
                     </label>
                  </div>

                  <div className="BeerNew-div-row">
                     <label className="BeerNew-label"><span className="BeerNew-span">ABV:</span>
                        <div>
                           <input
                              type="text"
                              name="abv"
                              className="BeerNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                     <label className="BeerNew-label"><span className="BeerNew-span">IBU:</span>
                        <div>
                           <input
                              type="text"
                              name="ibu"
                              className="BeerNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                     <label className="BeerNew-label"><span className="BeerNew-span">Rating:</span>
                        <div>
                           <input
                              type="text"
                              name="rating"
                              className="BeerNew-input"
                              onChange={this.handleChange}
                           />
                        </div>
                     </label>
                  </div>

                  <div className="BeerNew-div-row">
                     <button className="BeerNew-submit-button">Submit</button>
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

export default BeerNew