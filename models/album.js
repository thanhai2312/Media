var mongoose=require('mongoose')
var Schema=mongoose.Schema

var albumSchema=new Schema({
    albumName:{
        type:String
    },
    quantity:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    subCategoyId:[{
        type:Schema.Types.ObjectId,
        ref:'SubCategories'
    }]
})

module.exports=mongoose.model('Albums',albumSchema)