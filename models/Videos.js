var mongoose=require('mongoose')
var Schema=mongoose.Schema

var videoSchema=new Schema({
    description:{
        type:String
    },
    url:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('Videos',videoSchema)