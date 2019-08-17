const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({

    content : {
        type : String,
    },
    rating : {
        type : Number,
        minlength : 1,
        maxlength : 5,
        required : true
    },
    user: {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
    
})
const Review = mongoose.model('Review', reviewSchema)
module.exports = Review