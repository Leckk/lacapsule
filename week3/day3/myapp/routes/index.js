var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
}
mongoose.connect('mongodb://leo:azerty1@ds115613.mlab.com:15613/weatherapp',
    options,         
    function(err) {
      console.log(err);
    }
);
var userSchema = mongoose.Schema({
  lastName: String,
  firstName: String,
  age: Number
});
var UserModel = mongoose.model('users', userSchema);
var newUser = new UserModel ({
  lastName: "Doe", 
  firstName: "John", 
  age: 43 
});
/* GET home page. */
router.get('/', function(req, res, next) {
  newUser.save(
    function (error, user) {
      console.log(user);
    }
);
  res.render('index', { title: 'Express' });
});
router.get('/finduser', function(req, res, next) {
  UserModel.find(
    { lastName: "Doe" } ,
    function (err, users) {
      console.log(users);
    }
);
  res.render('index', { title: 'Express' });
});
module.exports = router;
