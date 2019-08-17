const mongoose=require('mongoose')//npm install mongoose
//db configuration
mongoose.Promise=global.Promise//mongoose to use the promise library by es6

mongoose.connect('mongodb://localhost:27017/EventsNear',{useNewUrlParser:true})
.then(()=>{
        console.log('connected to db')
})
.catch((err)=>{
        console.log('error connnecting to db',err)
})
module.exports=mongoose