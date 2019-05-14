var express = require('express');
var app = express();
var ObjectId = require('mongodb').ObjectId;

var Product = require('../models/product');

// get list of products
app.get('/', function(req, res, next) {	
	// fetch and sort product collection by id in descending order
	req.db.collection('product').find().sort({"_id": -1}).toArray(function(err, result) {
		//if (err) return console.log(err)
		if (err) {
			req.flash('error', err)
			res.render('product/list', {
				title: 'Tree List', 
				data: ''
			});
		} else {
			// render to views/product/list.ejs template file
			res.render('product/list', {
				title: 'Tree List', 
				data: result
			});
		}
	});
});

// show add product form
app.get('/add', function(req, res, next){	
	// render to views/product/add.ejs
	res.render('product/add', {
		title: 'Add New Product',
		name: '',
		price: '',
		description: ''		
	});
});

// add product form action
app.post('/add', function(req, res, next){	

	let name = req.body.name;
	let price = req.body.price;
	let description = req.body.description;
	let category = req.body.category;
	let conditionsOfPlace = req.body.conditionsOfPlace;
	let maintanceRequirements = req.body.maintanceRequirements;
	let maxHeight = req.body.maxHeight;
	let growthRate = req.body.growthRate;
	let imageURL = req.body.imageURL;
		
	let newProduct = Product();
	newProduct.name = name;
	newProduct.price = price;
	newProduct.category = category;
	newProduct.conditionsOfPlace = conditionsOfPlace;
	newProduct.maintanceRequirements = maintanceRequirements;
	newProduct.maxHeight = maxHeight;
	newProduct.growthRate = growthRate;
	newProduct.imageURL = imageURL;

	req.db.collection('product').insert(newProduct, function(err, result) {
		if (err) {
			req.flash('error', err);
			
			// render to views/product/add.ejs
			res.render('product/add', {
				title: 'Add New Product'					
			})
		} else {				
			req.flash('success', 'Data added successfully!')
			
			// redirect to product list page				
			res.redirect('/product')
			
		}
	});
});

// edit product form
app.get('/edit/(:id)', function(req, res, next) {

	var o_id = new ObjectId(req.params.id)

	req.db.collection('product').find({"_id": o_id}).toArray(function(err, result) {
		if(err) return console.log(err)
		
		// if product not found
		if (!result) {
			req.flash('error', 'Product not found with id = ' + req.params.id)
			res.redirect('/product')
		}
		else { // if product found
			// render to views/product/edit.ejs template file
			res.render('product/edit', {
				title: 'Edit Product', 
				//data: rows[0],
				id: result[0]._id,
				name: result[0].name,
				price: result[0].price,
				description: result[0].description,
				category: result[0].category,	
				conditionsOfPlace: result[0].conditionsOfPlace,	
				maintanceRequirements: result[0].maintanceRequirements,	
				maxHeight: result[0].maxHeight,	
				growthRate: result[0].growthRate,	
				imageURL: result[0].imageURL		
			});
		}
	});
});

// edit product form action
app.put('/edit/(:id)', function(req, res, next) {

	let name = req.body.name;
	let price = req.body.price;
	let description = req.body.description;
	let category = req.body.category;
	let conditionsOfPlace = req.body.conditionsOfPlace;
	let maintanceRequirements = req.body.maintanceRequirements;
	let maxHeight = req.body.maxHeight;
	let growthRate = req.body.growthRate;
	let imageURL = req.body.imageURL;
		
	var product = {
		name: name,
		price: price,
		description: description,
		category: category,
		conditionsOfPlace: conditionsOfPlace,
		maintanceRequirements: maintanceRequirements,
		maxHeight: maxHeight,
		growthRate: growthRate,
		imageURL: imageURL
	}
	
	var o_id = new ObjectId(req.params.id);
	req.db.collection('product').update({"_id": o_id}, product, function(err, result) {
		if (err) {
			req.flash('error', err)
			
			// render to views/product/edit.ejs
			res.render('product/edit', {
				title: 'Edit Product',
				id: req.params.id,
				name: name,
				price: price,
				description: description,
				category: category,
				conditionsOfPlace: conditionsOfPlace,
				maintanceRequirements: maintanceRequirements,
				maxHeight: maxHeight,
				growthRate: growthRate,
				imageURL: imageURL,
			})
		} else {
			req.flash('success', 'Data updated successfully!');
			
			res.redirect('/product');
			
		}
	});		
});

// delete product
app.delete('/delete/(:id)', function(req, res, next) {	
	var o_id = new ObjectId(req.params.id)
	req.db.collection('product').remove({"_id": o_id}, function(err, result) {
		if (err) {
			req.flash('error', err)
			// redirect to product list page
			res.redirect('/product')
		} else {
			req.flash('success', 'Product deleted successfully! id = ' + req.params.id)
			// redirect to product list page
			res.redirect('/product')
		}
	});
});

module.exports = app
