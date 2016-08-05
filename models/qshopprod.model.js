var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var qshopProd = new Schema ({
    name: {type: String, required: true},
    picture: String,
    price: { type: Number,required: true, min: 0},
    onSale: Boolean,
    description: {type: String, required: true},
    specifications: [{type: mongoose.Schema.Types.ObjectId, ref:'Specs'}],
    reviews: [{type: mongoose.Schema.Types.ObjectId, ref:'Review'}],

});

var Product = mongoose.model('QshopProduct',qshopProd);
module.exports = Product;
