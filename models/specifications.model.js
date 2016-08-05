var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var specsSchema =  new Schema({
      label: String,
      value: String

});

var specs = mongoose.model('Specs', specsSchema);
module.exports = specs;
