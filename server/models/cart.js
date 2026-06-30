const cartSchema = new mongoose.Schema({

customerId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},

restaurantId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Restaurant",
    required:true
},

items:[
{
    menuItemId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"MenuItem"
    },

    quantity:{
        type:Number,
        default:1
    }
}
]

},{timestamps:true});