import styles from "./Cart.module.css";

import pizza from "../../assets/pizza.jpg";
import burger from "../../assets/salad.jpg";

import { FaTrash } from "react-icons/fa";

function Cart() {
  return ( 
    <div className={styles.cart}>

      <h4 className={styles.title}>
        Shopping Cart
      </h4>

      {/* Item 1 */}

      <div className={styles.item}>

        <img
          src={pizza}
          alt="Pizza"
          className={styles.image}
        />

        <div className={styles.info}>

          <h6>Pepperoni Pizza</h6>

          <small>$18.00</small>

          <div className={styles.quantity}>

            <button>-</button>

            <span>1</span>

            <button>+</button>

          </div>

        </div>

        <FaTrash className={styles.delete} />

      </div>

      {/* Item 2 */}

      <div className={styles.item}>

        <img
          src={burger}
          alt="Burger"
          className={styles.image}
        />

        <div className={styles.info}>

          <h6>Classic Burger</h6>

          <small>$14.00</small>

          <div className={styles.quantity}>

            <button>-</button>

            <span>2</span>

            <button>+</button>

          </div>

        </div>

        <FaTrash className={styles.delete} />

      </div>

      <hr />

      {/* Summary */}

      <div className={styles.summary}>

        <div>

          <span>Subtotal</span>

          <strong>$46.00</strong>

        </div>

        <div>

          <span>Delivery</span>

          <strong>$5.00</strong>

        </div>

        <div className={styles.total}>

          <span>Total</span>

          <strong>$51.00</strong>

        </div>

      </div>

      <button className={styles.checkout}>
        Checkout
      </button>

    </div>
  );
}

export default Cart;