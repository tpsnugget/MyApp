var express = require('express'),
  mongoose = require("mongoose")
var router = express.Router();

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  streetAddress: String,
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: String,
  phone: String,
  latitude: String,
  longitude: String,
  image: String,
  website: String,
  rating: String
})

const Restaurant = mongoose.model("Restaurant", restaurantSchema)

// /* Get Beer */
// router.get('/', function (req, res) {
//   console.log("Get req.query: ", req.query)
//   User.findOne(req.query, function (err, foundUser) {
//     if (err) {
//       console.error("User Get Route Error: ", err)
//       res.send(err)
//     }
//     else {
//       console.log("User Get Route foundUser", foundUser)
//       res.send(foundUser)
//     }
//   })
// });

/* Add A New Restaurant */
router.post("/", function (req, res) {
  console.log("User Post Route req.body", req.body)
  Restaurant.create(req.body, (err, newRestaurant) => {
    if (err) {
      console.error("User Post Route Error: ", err)
      res.send(err)
    }
    else {
      console.log("User Post Route newRestaurant", newRestaurant)
      res.send(newRestaurant)
    }
  })
})

module.exports = router;