const restaurantHoursSchema=new mongoose.Schema({

restaurantId:{
type:mongoose.Schema.Types.ObjectId,
ref:"Restaurant"
},

day:String,

open:String,

close:String,

isClosed:Boolean

});