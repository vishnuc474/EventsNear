const Category=require('../models/Category')

module.exports.list=(req,res)=>{
    Category.find({/*userId:req.user._id*/}).populate('category',['name'])//returns a promise object
    .then((categories)=>{
        res.json(categories)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.create=(req,res)=>{
    const body=req.body
    const category=new Category(body)
    category.save()
    .then(category => res.json({ notice: 'successfully created a category', category})) 
    .catch(err => res.json(err))
}
module.exports.show=(req,res)=>{
    const id=req.params.id
    Category.findById(id).populate('category')
    .then(category=>{
        if(category){
         res.json(category)   
        }else{
            res.json({})
        }
    })
}
module.exports.update=(req,res)=>{
    const id=req.params.id
    Category.findByIdAndUpdate(id,{$set:body},{new:true})
    .then(category=>{
        if(category){
            res.json(category)
        }else{
            res.json({})
        }
    })
}
module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Category.findOneAndDelete(id)
    .then(category=>{
        if(category){
            res.json(category)
        }else{
            res.json({})
        }       
    })
}   