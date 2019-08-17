const Event = require('../models/Event')

module.exports.list=(req,res)=>{
    // note.userId = req.user._id

    Event.find({user:req.user._id}).populate("category")//returns a promise object
    .then((events)=>{
        res.json(events)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.create=(req,res)=>{
    const data=req.body
    const event=new Event({user:req.user._id,name:data.name,description:data.description,category:data.category,seatdetails:{seatCount:data.seatCount,tktPrice:data.tktPrice},location_details:{city:data.city,address:data.address},date:{startDate:data.startDate,endDate:data.endDate}})
    event.save()
    .then(event => res.json({ notice: 'successfully created an event', event})) 
    .catch(err => res.json(err))
}