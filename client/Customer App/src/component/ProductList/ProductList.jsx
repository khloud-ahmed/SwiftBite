import styles from "./ProductList.module.css";
import ProductCard from "../ProductCard/ProductCard";

import pizza from "../../assets/pizza.jpg";
import burger from "../../assets/salad.jpg";
import pasta from "../../assets/pasta.jpg";
import steak from "../../assets/steak.jpg";
import salad from "../../assets/salad.jpg";
import dessert from "../../assets/dessert.jpg";

const popularFoods = [
  {
    id: 1,
    title: "Pepperoni Pizza",
    image: pizza,
    rating: 4.8,
    price: 18,
    description: "Cheese • Tomato • Pepperoni",
  },

  {
    id: 2,
    title: "Classic Burger",
    image: burger,
    rating: 4.9,
    price: 14,
    description: "Beef • Cheese • Lettuce",
  },

  {
    id: 3,
    title: "Creamy Pasta",
    image: pasta,
    rating: 4.7,
    price: 16,
    description: "Cream Sauce • Chicken",
  },
];

const mainCourse = [
  {
    id: 4,
    title: "Grilled Steak",
    image: steak,
    rating: 4.9,
    price: 27,
    description: "Premium Beef Steak",
  },

  {
    id: 5,
    title: "Fresh Salad",
    image: salad,
    rating: 4.6,
    price: 11,
    description: "Avocado • Tomato",
  },

  {
    id: 6,
    title: "Chocolate Cake",
    image: dessert,
    rating: 5,
    price: 9,
    description: "Dark Chocolate",
  },
];

function ProductList() {
  return (
    <>

      {/* Popular */}

      <div className="mb-5">

        <div className={styles.header}>

          <h2>Popular Near You</h2>

          <button className={styles.viewBtn}>
            View All
          </button>

        </div>

        <div className="row">

          {popularFoods.map((food) => (

            <div
              key={food.id}
              className="col-lg-4 col-md-6 mb-4"
            >
              <ProductCard {...food} />
            </div>

          ))}

        </div>

      </div>

      {/* Main */}

      <div>

        <div className={styles.header}>

          <h2>Main Course</h2>

          <button className={styles.viewBtn}>
            View All
          </button>

        </div>

        <div className="row">

          {mainCourse.map((food) => (

            <div
              key={food.id}
              className="col-lg-4 col-md-6 mb-4"
            >
              <ProductCard {...food} />
            </div>

          ))}

        </div>

      </div>

    </>
  );
}

export default ProductList;