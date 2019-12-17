var express = require('express'),
  mongoose = require("mongoose")
var router = express.Router();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect("mongodb://localhost:27017/MyAppDB", options)

const restaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  zip: String
})

const Restaurant = mongoose.model("Restaurant", restaurantSchema)

/* Get All Restaurants */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
