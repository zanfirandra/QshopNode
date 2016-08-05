var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
      name: {type: String, required: true},
      price : {type: Number, min: 0 },
      currency: String,
      description: {type: String, min: 20, max: 150},
      picture: String,
      reviews: [{type: mongoose.Schema.Types.ObjectId, ref:'Review'}],
      created_at: Date,
      updated_at: Date

});

productSchema.methods.getPrice = function(){
  this.price = this.price + this.currency;
  return this.price;
}

productSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;

  if(this.created_at){
    this.created_at = currentDate;
  }

  next();
});

var Product = mongoose.model('Product',productSchema);
module.exports = Product;
