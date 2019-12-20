/* Add a New BEER PAGE */

import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import Cancel from "../../../../components/Cancel"
import SnackbarGreen from "../../../Atoms/SnackbarGreen/SnackbarGreen"
import SnackbarRed from "../../../Atoms/SnackbarRed/SnackbarRed"
import Button from "../../../Atoms/Button/Button"
import InputText from "../../../Atoms/InputText/InputText"
import InputTextDoubleLength from "../../../Atoms/InputTextDoubleLength/InputTextDoubleLength"
import InputTextTripleLength from "../../../Atoms/InputTextTripleLength/InputTextTripleLength"
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
         snackBarGreenOpen: false,
         snackBarRedOpen: false,
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
         rating: this.state.rating,
         addedBy: this.props.username
      }

      axios.post("http://localhost:9000/beer", newBeer)
         .then((response) => {
            // console.log(response)
            if (response.data.name === "MongoError") {
               this.setState({
                  snackBarRedOpen: true,
                  msg: "Beer was not added..."
               })
               setTimeout(() => {
                  this.setState({
                     snackBarRedOpen: false,
                     msg: ""
                  })
               }, 2000);
            } else {
               this.setState({
                  snackBarGreenOpen: true,
                  msg: "Beer was added!"
               })
               setTimeout(() => {
                  this.setState({
                     snackBarGreenOpen: false,
                     msg: "",
                     addBeerSuccessful: true
                  })
               }, 2000);
            }
         })
         .catch((err) => console.log(err))
   }

   render() {

      const { addBeerSuccessful, snackBarGreenOpen, snackBarRedOpen } = this.state

      return (
         <div className="BeerNew-main-container">
            {addBeerSuccessful && <Redirect to="/beer" />}
            <div className="BeerNew-form-container">
               <h1 className="BeerNew-h1">Add a New Beer</h1>
               <form
                  className="BeerNew-form"
                  onSubmit={this.handleSubmit} >

                  <div className="BeerNew-div-row">
                     <InputText className="BeerNew-label" spanClassName="BeerNew-span" label="Beer Name:" type="text" name="name" inputClassName="BeerNew-input" handleChange={this.handleChange} />
                     <InputText className="BeerNew-label" spanClassName="BeerNew-span" label="Brewery Name:" type="text" name="brewery" inputClassName="BeerNew-input" handleChange={this.handleChange} />
                  </div>

                  <div className="BeerNew-div-row">
                     <InputTextDoubleLength className="BeerNew-label" spanClassName="BeerNew-span" label="Street Address:" type="text" name="streetAddress" inputClassName="BeerNew-input-address" handleChange={this.handleChange} />
                  </div>

                  <div className="BeerNew-div-row">
                     <InputText className="BeerNew-label" spanClassName="BeerNew-span" label="City:" type="text" name="city" inputClassName="BeerNew-input" handleChange={this.handleChange} />
                     <InputText className="BeerNew-label" spanClassName="BeerNew-span" label="State:" type="text" name="state" inputClassName="BeerNew-input" handleChange={this.handleChange} />
                     <InputText className="BeerNew-label" spanClassName="BeerNew-span" label="Zip Code:" type="text" name="zip" inputClassName="BeerNew-input" handleChange={this.handleChange} />
                  </div>

                  <div className="BeerNew-div-row">
                     <InputText className="BeerNew-label" spanClassName="BeerNew-span" label="Phone:" type="text" name="phone" inputClassName="BeerNew-input" handleChange={this.handleChange} />
                     <InputText className="BeerNew-label" spanClassName="BeerNew-span" label="Latitude:" type="text" name="latitude" inputClassName="BeerNew-input" handleChange={this.handleChange} />
                     <InputText className="BeerNew-label" spanClassName="BeerNew-span" label="Longitude:" type="text" name="longitude" inputClassName="BeerNew-input" handleChange={this.handleChange} />
                  </div>

                  <div className="BeerNew-div-row">
                     <InputTextTripleLength className="BeerNew-label" spanClassName="BeerNew-span" label="Beer Image URL:" type="text" name="image" inputClassName="BeerNew-input-image BeerNew-input" handleChange={this.handleChange} />
                  </div>

                  <div className="BeerNew-div-row">
                     <InputTextTripleLength className="BeerNew-label" spanClassName="BeerNew-span" label="Website URL:" type="text" name="website" inputClassName="BeerNew-input-image BeerNew-input" handleChange={this.handleChange} />
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

                     <InputText className="BeerNew-label" spanClassName="BeerNew-span" label="ABV:" type="text" name="abv" inputClassName="BeerNew-input" handleChange={this.handleChange} />
                     <InputText className="BeerNew-label" spanClassName="BeerNew-span" label="IBU:" type="text" name="ibu" inputClassName="BeerNew-input" handleChange={this.handleChange} />
                     <InputText className="BeerNew-label" spanClassName="BeerNew-span" label="Rating:" type="text" name="rating" inputClassName="BeerNew-input" handleChange={this.handleChange} />

                  </div>

                  <div className="BeerNew-div-row BeerNew-submit-button">
                     <Button label="Submit" />
                  </div>

               </form>
            </div>

            <div>
               <Cancel />
            </div>
            {snackBarGreenOpen && <SnackbarGreen msg={this.state.msg} />}
            {snackBarRedOpen && <SnackbarRed msg={this.state.msg} />}
         </div >
      )
   }
}

export default BeerNew