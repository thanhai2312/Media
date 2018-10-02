var mongoose=require('mongoose')
var Schema=mongoose.Schema

var positionSchema=new Schema({
    positionName:{
        type:String
    }
})

module.exports=mongoose.model('Positions',positionSchema)