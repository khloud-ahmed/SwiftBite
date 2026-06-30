const promoSchema=new mongoose.Schema({

code:{
type:String,
unique:true
},

discount:{
type:Number,
required:true
},

expirationDate:Date,

isActive:{
type:Boolean,
default:true
}

});