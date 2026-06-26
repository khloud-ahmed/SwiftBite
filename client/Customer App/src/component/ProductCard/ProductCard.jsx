import styles from "./ProductCard.module.css";

import { FaHeart, FaPlus, FaStar } from "react-icons/fa";

function ProductCard({
  image,
  title,
  description,
  price,
  rating,
}) {
  return (
    <div className={`card ${styles.card}`}>

      {/* Image */}

      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={title}
          className={`card-img-top ${styles.image}`}
        />

        <button className={styles.favorite}>
          <FaHeart />
        </button>
      </div>

      {/* Body */}

      <div className={`card-body ${styles.body}`}>

        <div className={styles.rating}>

          <FaStar />

          <span>{rating}</span>

        </div>

        <h5 className={styles.title}>
          {title}
        </h5>

        <p className={styles.description}>
          {description}
        </p>

        <div className={styles.footer}>

          <h4 className={styles.price}>
            ${price}
          </h4>

          <button className={styles.addBtn}>
            <FaPlus />
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;