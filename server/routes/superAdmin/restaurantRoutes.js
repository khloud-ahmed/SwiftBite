const express=require("express");
const router=express.Router();

const protect=require("../../middlewares/authMiddleware");
const authorize=require("../../middlewares/authorize");

const{

getAllRestaurants,
getRestaurantById,
updateRestaurant,
deleteRestaurant,
toggleRestaurantStatus

}=require("../../controllers/superAdmin/restaurantController");

router.use(protect);
router.use(authorize("super_admin"));

router.get("/",getAllRestaurants);

router.get("/:id",getRestaurantById);

router.put("/:id",updateRestaurant);

router.delete("/:id",deleteRestaurant);

router.patch("/:id/status",toggleRestaurantStatus);

module.exports=router;