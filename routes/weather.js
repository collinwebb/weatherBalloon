var express = require('express');
var request = require('request');
var router = express.Router();
var wunderApi = 'http://api.wunderground.com/api/' + process.env.WEATHER_KEY + '/conditions/q/CA/San_Francisco.json';

/* GET home page. */
router.get('/', function(req, res, next) {
  request(wunderApi, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(response); // Show the HTML for the Google homepage. 
  }
})
});

module.exports = router;
