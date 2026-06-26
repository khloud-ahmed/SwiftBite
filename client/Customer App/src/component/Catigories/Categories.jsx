import styles from "./Catigories.module.css";

import {
  FaUtensils,
  FaPizzaSlice,
  FaHamburger,
  FaFish,
  FaIceCream,
  FaCoffee,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    name: "All",
    icon: <FaUtensils />,
  },
  {
    id: 2,
    name: "Pizza",
    icon: <FaPizzaSlice />,
  },
  {
    id: 3,
    name: "Burger",
    icon: <FaHamburger />,
  },
  {
    id: 4,
    name: "Sea Food",
    icon: <FaFish />,
  },
  {
    id: 5,
    name: "Dessert",
    icon: <FaIceCream />,
  },
  {
    id: 6,
    name: "Drinks",
    icon: <FaCoffee />,
  },
];

function Categories() {
  return (
    <div className={styles.sidebar}>

      <h4 className={styles.heading}>
        Categories
      </h4>

      {categories.map((item) => (

        <button
          key={item.id}
          className={`${styles.category} ${
            item.id === 1 ? styles.active : ""
          }`}
        >
          <span className={styles.icon}>
            {item.icon}
          </span>

          {item.name}

        </button>

      ))}

    </div>
  );
}

export default Categories;