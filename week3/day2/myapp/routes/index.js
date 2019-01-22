var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  request("api.openweathermap.org/data/2.5/weather?q=Paris&appid=6dd2250a60aa1473b57ce79beeeaef4d", function(error, response, body) {
    body = JSON.parse(body);
    console.log(body[1].coord);
    res.render('index', {body});
});
});

module.exports = router;
