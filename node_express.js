'use strict'

var express = require('express');
var mongoose = require('mongoose');
var product = require('./models/product.model');
var review = require('./models/review.model');
var app = express();
//body-parser midleware express pt a prelua datele sa le afiseze in postman
mongoose.connect('mongodb://localhost:27017/mydb'); // intr-un fisier de configuratie /poate primi si un parametru callback de eroare




var newProduct = product({
			name: 'Laptop apple',
			price: 7000,
			currency: 'RON',
			description:'asdvsfssd',
			picture: ''

});

var newReview = review({
			author: ' ioana',
			text: 'foarte bun',
			stars: 5

});

newProduct.save(function(err,product){
	if(err) throw err;
	 console.log(product);
});

newReview.save(function(err,newReview){
	if(err) throw err;
	console.log(newReview);
})

product.find( {price:50}, function(err,products){
	if(err) throw err;
	console.log(products);
});

// product.findById( '57a05caf2670211d10f40e46' , function(err,prodDoc){
// 	review.findById('57a05eb21fb8ce62107f34be', function(err,reviewDoc){
// 			if(err) throw err;
// 			prodDoc.reviews.push (reviewDoc.id);
// 			prodDoc.save(function(err){
// 				if(err) throw err;
// 				console.log('Updated!');
// 			});
//
// 	});
//
//
// });

// product.find().populate('reviews').exec(function(err, prodDoc) {
// 	if(err) throw err;
// 	console.log(prodDoc[0]);
//
// });

// product.findByIdAndRemove('57a0609d30105d9d10851712', function(err){
// 	if(err) throw err;
//
// 	console.log("Deleted!")
// });
//
app.get('/', function(req,res){
	res.send('Hello express');

});

app.listen(3000, function (){
	console.log('Express listening on port 3000');

});
