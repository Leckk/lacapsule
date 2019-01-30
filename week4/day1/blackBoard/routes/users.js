var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  var userModel = require('../models/user');

/* POST sign-up route. */
router.post('/users', function(req, res, next) {
  var newUser = new userModel({
    name: 'Roger',
    lastName: 'Lemaire',
    email: 'Lemaire@fd',
    password: 'azedaz',
    age:23,
    sexe: true,
    dateInscription: '22/09/90',
  });
  console.log(newUser)
});
});

module.exports = router;
