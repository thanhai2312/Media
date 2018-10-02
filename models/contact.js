var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var contactSchema=new Schema({
    email:{
        type: String
    },
    phone:{
        type:String
    },
    address:{
        type:String
    },
    fax:{
        type:String
    },
    link_Twitter:{
        type:String
    },
    link_Facebook:{
        type:String
    },
    link_Instagram:{
        type:String
    },
    link_Flickr:{
        type:String
    },
    link_Youtube:{
        type:String
    },
});
module.exports=mongoose.model('contact',contactSchema);