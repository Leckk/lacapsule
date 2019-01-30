var mongoose = require('mongoose');

// Creation of a new schema for our cities
var articleModel = mongoose.Schema({
  libelle: String,
  desc: String,
  stock: Number,
  Prix: Number,
  img: String,
});

// Creation of a new model for our cities
var articleModel = mongoose.model('articles', articleModel);

module.exports = articleModel;
