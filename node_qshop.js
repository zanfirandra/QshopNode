var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var product = require('./models/qshopprod.model');
var review = require('./models/review.model');
var specs = require('./models/specifications.model');

mongoose.connect('mongodb://localhost:27017/myQshopdb');
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());



// var newProduct = product({
//   name: 'My Prod',
//   picture: 'No picture',
//   price: 7655,
//   onSale: true,
//   description: 'nice product'
// });
//
// newProduct.save(function(err,product){
// 	if(err) throw err;
// 	 console.log(product);
// });
//
//
// var newReview = review({
// 			author: 'Marian',
// 			text: 'foarte bun',
// 			stars: 4
//
// });
//
// newReview.save(function(err,newReview){
// 	if(err) throw err;
// 	console.log(newReview);
// })
//
// var newSpec = specs({
//   label: "prop 2",
//   value: "value 2"
// });
//
// newSpec.save(function(err,newSPec){
//   if(err) throw err;
//   console.log(newSpec);
// });


app.get('/', function(req, res) {
    product.find({}, function(err, products) {
        if (err) throw err;                     // scriem callback urile in alt fisier . pt functii cu mai mult de 2 parametrii - transmitem un obiect cu mai multi parametri
        res.send(products);
    });

});

app.post('/reviews', function(req, res) {
    console.log(req.body);
    var rev = review({
        author: req.body.author,      //
        text: req.body.txt,          //req.body
        stars: req.body.stars       //

    })

    rev.save(function(err, review) {
        if (err) throw err;
        res.json(201, review);
    })
})


app.post('/spec', function(req, res) {
    console.log(req.body);
    var spec = specs({
        label: req.body.prop,
        value: req.body.val

    })

    spec.save(function(err, specifications) {
        if (err) throw err;
        res.json(201, specifications);
    })
})


app.put('/products/:id', function(req, res) {

    var id = req.params.id;
    product.findById(id, function(err, prod) {
        if (err)
            throw err;
        prod.name = req.body.name;

        prod.save(function(err) {
            if (err)
                res.send(err);

            res.json(prod)
        });

    });
});


app.delete('/review/:id', function(req, res) {
    review.remove({
        _id: req.params.id
    }, function(err, prod) {
        if (err)
            throw err;

        res.json({
            message: 'Deleted!'
        });
    });
});





app.listen(3000, function() {
    console.log('Express listening on port 3000');

});
