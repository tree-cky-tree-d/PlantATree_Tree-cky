var express = require('express')
var app = express()

// render to views/index.ejs template file
app.get('/', function(req, res) {
	req.db.collection('product').find().sort({"_id": -1}).toArray(function(err, result) {
		// render to views/product/list.ejs template file
		res.render('index.ejs', {
			title: 'PlantATree', 
			data: result
		})
	})
})

module.exports = app;
