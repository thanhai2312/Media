var mongoose=require('mongoose')
var Schema=mongoose.Schema

var feedbackSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    content:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('Feedbacks',feedbackSchema)