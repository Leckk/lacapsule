var express = require('express');
var router = express.Router();
debugger

/* GET home page. */
var dataBike = [
  bike1= {price :'10', title: 'Model 1', img: '/images/bike-1.jpg'},
  bike2={price :'20', title: 'Model 2', img: '/images/bike-2.jpg'},
  bike3={price :'30', title: 'Model 3', img: '/images/bike-3.jpg'},
  bike4= {price :'40', title: 'Model 4', img: '/images/bike-4.jpg'},
  bike5={price :'50', title: 'Model 5', img: '/images/bike-5.jpg'},
  bike6={price :'60', title: 'Model 6', img: '/images/bike-6.jpg'}

]
bikeShop =[
  bike1= {price :679, title: 'Model 1', img: '/images/bike-1.jpg', quantity: 2},
  bike2= {price :799, title: 'Model 2', img: '/images/bike-2.jpg', quantity: 2},
  bike3= {price :679, title: 'Model 1', img: '/images/bike-1.jpg', quantity: 2},
]
newBoucle = {total: 'dsds'}
router.get('/', function(req, res, next) {
  res.render('index', { dataBike});
  console.log(databike);
});
router.get('/shop', function(req, res, next) {
  res.render('shop', { bikeShop});
});

module.exports = router;
