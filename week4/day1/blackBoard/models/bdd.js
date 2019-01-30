// Do not forget to store your new request module in a variable in order to use it
const mongoose = require('mongoose');

// useNewUrlParser ;)
var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
  };
  mongoose.connect('mongodb://blackboard:azerty1@ds115543.mlab.com:15543/blackboard',
  options,
    function(err) {
      if (err) {
        console.log("pas ok");
      } else {
        console.info('connexion ok');
      }
    }
);

module.exports = mongoose;
