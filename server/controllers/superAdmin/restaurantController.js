const Restaurant = require("../../models/restaurant");
const User = require("../../models/user");

/* ===========================
   Get All Restaurants
=========================== */

exports.getAllRestaurants = async (req, res) => {
  try {

    const restaurants = await Restaurant.find()
      .populate("ownerId", "name email phoneNumber isActive");

    res.status(200).json({
      success: true,
      count: restaurants.length,
      data: restaurants,
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};

/* ===========================
   Get Restaurant By Id
=========================== */

exports.getRestaurantById = async (req, res) => {

  try {

    const restaurant = await Restaurant.findById(req.params.id)
      .populate("ownerId","name email phoneNumber");

    if (!restaurant) {
      return res.status(404).json({
        success:false,
        message:"Restaurant not found"
      });
    }

    res.status(200).json({
      success:true,
      data:restaurant
    });

  } catch(err){

    res.status(500).json({
      success:false,
      message:err.message
    });

  }

};

/* ===========================
   Update Restaurant
=========================== */

exports.updateRestaurant = async(req,res)=>{

try{

const restaurant=await Restaurant.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true,
runValidators:true
}

);

if(!restaurant){

return res.status(404).json({

success:false,
message:"Restaurant not found"

});

}

res.status(200).json({

success:true,
message:"Restaurant updated successfully",
data:restaurant

});

}catch(err){

res.status(500).json({

success:false,
message:err.message

});

}

};

/* ===========================
   Delete Restaurant
=========================== */

exports.deleteRestaurant=async(req,res)=>{

try{

const restaurant=await Restaurant.findById(req.params.id);

if(!restaurant){

return res.status(404).json({

success:false,
message:"Restaurant not found"

});

}

await restaurant.deleteOne();

res.status(200).json({

success:true,
message:"Restaurant deleted successfully"

});

}catch(err){

res.status(500).json({

success:false,
message:err.message

});

}

};

/* ===========================
   Activate / Suspend Restaurant
=========================== */

exports.toggleRestaurantStatus=async(req,res)=>{

try{

const restaurant=await Restaurant.findById(req.params.id);

if(!restaurant){

return res.status(404).json({

success:false,
message:"Restaurant not found"

});

}

restaurant.isActive=!restaurant.isActive;

await restaurant.save();

res.status(200).json({

success:true,
message:restaurant.isActive
?"Restaurant activated successfully"
:"Restaurant suspended successfully",

data:restaurant

});

}catch(err){

res.status(500).json({

success:false,
message:err.message

});

}

};