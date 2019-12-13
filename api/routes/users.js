var express = require('express'),
  mongoose = require("mongoose")
var router = express.Router();

// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }

// mongoose.connect("mongodb://localhost:27017/myUsersDB", options)

const userSchema = new mongoose.Schema({
  first: {
    type: String,
    required: true
  },
  last: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = mongoose.model("User", userSchema)

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
/* Add A New User */
router.post("/", function(req, res){
  console.log("User Post Route req.body", req.body)
  User.create(req.body, (err, newUser) => {
    if(err){
      console.error("User Post Route Error: ", err)
      res.send(err)
    }
    else{
      console.log("User Post Route newUser", newUser)
      res.send(newUser)
    }
  })
})

module.exports = router;
