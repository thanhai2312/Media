var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var serviceSchema=new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Service',serviceSchema)