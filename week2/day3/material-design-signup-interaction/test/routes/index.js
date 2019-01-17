var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post("/inscription", function(req, res, next) {
  console.log( req.body );
  res.render('inscription', {nom: req.body.nom});
});

module.exports = router;
