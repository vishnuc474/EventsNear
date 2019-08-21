const Booking = require('../models/Booking')

module.exports.list = (req, res) => {
    Booking.find({user:req.user._id}).populate('eventId')
        .then(bookings => {
        res.json(bookings)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.create = (req, res) => {
    const data = req.body
    const booking = new Booking(data)
    booking.save()
    .then(booking => res.json({ notice: 'successfully created a category', booking})) 
    .catch(err => res.json(err))

}

module.exports.show = (req, res) => {
    const id = req.params.id
    Booking.findOne({user:req.user._id,_id:id}).populate('eventId')
        .then(booking =>{
            res.json(booking)
        })
        .catch((err)=>{
            res.json(err)
        })

}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Booking.findOneAndDelete(id)
        .then(booking => {
            res.json(booking)
        })
        .catch((err) => {
            res.json(err)
        })
    
}