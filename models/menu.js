var mongose=require('mongoose');
var Schema=mongose.Schema;

var MenuSchema=new Schema({
    name:{
        type: String,
        required: true
    },
    title:{
        type: String,
        default:""
    },
    link:{
        type: String,
        default:""
    },
    status:{
        type:[{
            type:String,
            enum:['available','unavailable']
        }],
        default:['available']
    }
});

MenuSchema.path('name').set((inputString)=>{
    return inputString[0].toUpperCase()+inputString.slice(1);
});

module.exports=mongose.model('Menu',MenuSchema);