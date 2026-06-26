import styles from "./Hero.module.css";
import restaurant from "../../assets/restaurant.jpg";

import {
  FaStar,
  FaClock,
  FaHeart,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Hero() {
  return (
    <section className={`container-fluid ${styles.heroSection}`}>

      <div className="row align-items-center">

        {/* Left */}

        <div className="col-lg-6">

          <span className={styles.badge}>
            Italian Restaurant
          </span>

          <h1 className={styles.title}>
            Bella Italia
          </h1>

          <p className={styles.description}>
            Authentic Italian cuisine crafted with fresh ingredients.
            Enjoy handmade pasta, wood-fired pizza and delicious desserts.
          </p>

          <div className={styles.info}>

            <span>
              <FaStar className={styles.icon} />
              4.8
            </span>

            <span>
              <FaClock className={styles.icon} />
              30-40 min
            </span>

            <span>
              <FaMapMarkerAlt className={styles.icon} />
              2.5 km
            </span>

          </div>

          <div className="mt-4">

            <button className={styles.orderBtn}>
              Order Now
            </button>

            <button className={styles.favoriteBtn}>
              <FaHeart />
            </button>

          </div>

        </div>

        {/* Right */}

        <div className="col-lg-6 text-center">

          <img
            src={restaurant}
            alt="Restaurant"
            className={`img-fluid ${styles.image}`}
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;