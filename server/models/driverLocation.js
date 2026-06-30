const driverLocationSchema=new mongoose.Schema({

driverId:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

location:{
type:{
type:String,
default:"Point"
},

coordinates:[Number]
}

},{timestamps:true});

driverLocationSchema.index({location:"2dsphere"});