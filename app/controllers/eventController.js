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
module.exports.show=(req,res)=>{
    // note.userId = req.user._id
    const id=req.params.id
    Event.findOne({user:req.user._id,_id:id}).populate("category")//returns a promise object
    .then((events)=>{
        res.json(events)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.create=(req,res)=>{
    const data=req.body
    const event=new Event({user:req.user._id,name:data.name,description:data.description,category:data.category,seatDetails:{seatCount:data.seatCount,tktPrice:data.tktPrice},location_details:{city:data.city,address:data.address},date:{startDate:data.startDate,endDate:data.endDate}})
    event.save()
    .then(event => res.json({ notice: 'successfully created an event', event})) 
    .catch(err => res.json(err))
}
module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Event.findOneAndDelete({_id:id, user:req.user._id})
    .then(event=>{
        console.log(event)
        if(event){
            res.json(event)
        }else{
            res.status('404').json({})
        }       
    })
    .catch(err=>{
        res.json(err)
    })
} 