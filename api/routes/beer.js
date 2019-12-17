var express = require('express'),
  mongoose = require("mongoose")
var router = express.Router();

const beerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brewery: {
    type: String,
    required: true
  },
  streetAddress: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true,
    unique: true
  },
  state: {
    type: String,
    required: true,
    unique: true
  },
  zip: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
})

const Beer = mongoose.model("Beer", beerSchema)

// /* Get A User */
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

/* Add A New Beer */
router.post("/", function (req, res) {
  console.log("User Post Route req.body", req.body)
  Beer.create(req.body, (err, newUser) => {
    if (err) {
      console.error("User Post Route Error: ", err)
      res.send(err)
    }
    else {
      console.log("User Post Route newUser", newUser)
      res.send(newUser)
    }
  })
})

module.exports = router;
