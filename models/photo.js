var mongoose=require('mongoose')
var Schema=mongoose.Schema

var photoSchema=new Schema({
    url:{
        type:String
    },
    alt:{
        type:String
    },
    albumId:{
        type:Schema.Types.ObjectId,
        ref:'Albums'
    }
})

module.exports=mongoose.model('Photos', photoSchema)