var express = require('express');
var router = express.Router();
var Settings = require('settings');
var config = new Settings(require('./config'));

/* GET home page. */
router.get('/', function(req, res, next) {
	var mysql      = require('mysql');
	var connection = mysql.createConnection(config.storage);
	connection.connect();
	var output = "";
	connection.query('SELECT * FROM dbmarket', function(err, rows, fields) {
	  if (err) throw err;
	  output = 'The solution is: ' + JSON.stringify(rows);
		  res.render('index', { 
			title: 'Sean',
			solution: output
		});
	});

	connection.end();
	
});

module.exports = router;
