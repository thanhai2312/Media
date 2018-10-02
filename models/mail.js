var mongoose=require('mongoose')
var Schema=mongoose.Schema

var mailSchema=new Schema({
    email:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('Mail',mailSchema)