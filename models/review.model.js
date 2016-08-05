var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    author: String,
    text: String,
    stars: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    }
});

var Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
