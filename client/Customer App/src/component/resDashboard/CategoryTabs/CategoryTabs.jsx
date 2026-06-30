import styles from "./CategoryTabs.module.css";
import { useState } from "react";

function CategoryTabs() {

  const [active, setActive] = useState("All Items");

  const categories = [
    "All Items",
    "Main Courses",
    "Appetizers",
    "Desserts",
    "Beverages",
  ];

  return (
    <div className={styles.tabs}>

      {categories.map((item) => (

        <button
          key={item}
          onClick={() => setActive(item)}
          className={`${styles.tab} ${
            active === item ? styles.active : ""
          }`}
        >
          {item}
        </button>

      ))}

    </div>
  );
}

export default CategoryTabs;