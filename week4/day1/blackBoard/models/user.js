var mongoose = require('mongoose');

// Creation of a new schema for our users
var userSchema = mongoose.Schema({
  name: String,
  lastName: String,
  email: String,
  password: String,
  age: Number,
  sexe: Boolean,
  dateInscription: String,
});

// Creation of a new model for our users
var userModel = mongoose.model('users', userSchema);

module.exports = userModel;
