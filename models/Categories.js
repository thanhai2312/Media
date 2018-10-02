var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var categorySchema=new Schema({
    categoryName:{
        type:String
    }
})

module.exports=mongoose.model('Categories',categorySchema);