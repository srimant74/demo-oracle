// Sample node.js web app for Pluralsight Docker CI course
// For demonstration purposes only
'use strict';

var express = require('express'),
    app = express();


app.set('views', 'views');
app.set('view engine', 'jade');

var data = {
	name: "Srimant Mishra",
	company: "Oracle India Pvt Ltd"
}

app.get('/', function(req, res) {
    res.render('home', {
		person : data
  });
});

app.listen(8081);
module.exports.getApp = app;