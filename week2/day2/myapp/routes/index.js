var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { products: ['chaussures', 'casquettes', 'pantalons'] });
});
router.get('/home', function(req, res, next) {
  res.render('index', { products: ['chausson', 'basket', 'jeans'] });
});

module.exports = router;
