var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var subCategorySchema=new Schema({
    subCategoryName:{
        type:String
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:'Categories'
    }
})

module.exports=mongoose.model('SubCategories',subCategorySchema)