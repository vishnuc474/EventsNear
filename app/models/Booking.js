const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookingSchema = new Schema({

    userId : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    count : {
        type : Number,
        required : true
    },
    participants : [{
        name : {
            type : String,
            required: true
        },
        age : {
            type : Number,
            required: true
        },
        sex : {
            type : String,
            required: true
        },
        mobile : {
            type : Number,
            required: true  
        }
    }],
    eventId : {
        type : Schema.Types.ObjectId,
        ref : 'Event'
    }

})
const Booking = mongoose.model("Booking", bookingSchema)
module.exports = Booking