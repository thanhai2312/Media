var mongoose=require('mongoose')
var Schema=mongoose.Schema

var employeeSchema=new Schema({
    loginName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String
    },
    gender:{
        type:String
    },
    birthday:{
        type:Date,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    },
    date:{
        type:Date,
        required:true,
        default:Date.now
    }
})

module.exports=mongoose.model('Employees',employeeSchema)