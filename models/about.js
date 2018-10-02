var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var aboutSchema=new Schema({
    title:{
        type:String

    },
    introduction:{
        type:String
    },
    image:{
        type:String
    },
    status:{
        type:Boolean,
        default:false
    }

});

module.exports=mongoose.model('about',aboutSchema);