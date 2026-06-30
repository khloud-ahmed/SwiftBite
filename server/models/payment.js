const paymentSchema=new mongoose.Schema({

orderId:{
type:mongoose.Schema.Types.ObjectId,
ref:"Order",
required:true
},

amount:Number,

method:{
type:String,
enum:["cash","card"]
},

status:{
type:String,
enum:["pending","paid","failed"],
default:"pending"
},

transactionId:String

},{timestamps:true});