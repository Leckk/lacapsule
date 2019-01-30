var express = require('express');
var router = express.Router();
var articleModel = require('../models/articles');

router.get('/', function(req, res, next) {
  res.render('index', console.log("test"));
});
router.post('/catalog', function(req, res, next) {
  articleModel.find(
    function(err, articleFromDataBase) {
      // console.log(citiesFromDataBase)
      res.render('catalog', {
        articleList: articleFromDataBase,
      });
    });
});
router.get('/messages', function(req, res, next) {
  res.render('messages');
});
router.get('/order', function(req, res, next) {
  res.render('order');
});
router.get('/orders-list', function(req, res, next) {
  res.render('orders-list');
});
router.get('/tasks', function(req, res, next) {
  res.render('tasks');
});
module.exports = router;
