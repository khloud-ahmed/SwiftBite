import style from "../DiscoverRestaurant/cover.module.css";
import foodImage from "../../assets/food.jpg";

function Cover() {
  return (
    <div className={style.heroContainer}>
      <div className={style.cover}>
        <p className={style.premium}>
          Premium Delivery Experience
        </p>

        <p className={style.delivery}>
          Crave it? We'll deliver it <span>Swiftly.</span>
        </p>

        <p className={style.description}>
          Experience the city's finest restaurants delivered
          to your doorstep with unmatched speed and care.
        </p>

        <div className={style.buttons}>
          <button className={style.exploreBtn}>
            Explore Restaurants
          </button>

          <button className={style.orderBtn}>
            Today's Deals
          </button>
        </div>
      </div>

      <div className={style.imageContainer}>
        <img src={foodImage} alt="Food" />
      </div>
    </div>
  );
}

export default Cover;