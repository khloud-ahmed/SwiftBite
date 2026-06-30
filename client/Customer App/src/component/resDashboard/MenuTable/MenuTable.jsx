import styles from "./MenuTable.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import pizza from "../../../assets/pizza.jpg";
import burger from "../../../assets/steak.jpg";
import pasta from "../../../assets/pasta.jpg";

function MenuTable() {

  const menu = [
    {
      id: 1,
      image: pizza,
      name: "Pepperoni Pizza",
      category: "Main Course",
      price: "$18",
      status: "Available",
    },

    {
      id: 2,
      image: burger,
      name: "Classic Burger",
      category: "Main Course",
      price: "$14",
      status: "Available",
    },

    {
      id: 3,
      image: pasta,
      name: "Creamy Pasta",
      category: "Pasta",
      price: "$16",
      status: "Unavailable",
    },
  ];

  return (
    <div className={styles.tableCard}>

      <table className={`table align-middle ${styles.table}`}>

        <thead>

          <tr>

            <th>Item</th>

            <th>Category</th>

            <th>Price</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {menu.map((item) => (

            <tr key={item.id}>

              <td>

                <div className={styles.item}>

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <span>{item.name}</span>

                </div>

              </td>

              <td>

                <span className={styles.badge}>
                  {item.category}
                </span>

              </td>

              <td>{item.price}</td>

              <td>

                <span
                  className={
                    item.status === "Available"
                      ? styles.available
                      : styles.unavailable
                  }
                >
                  {item.status}
                </span>

              </td>

              <td>

                <button className={styles.editBtn}>
                  <FaEdit />
                </button>

                <button className={styles.deleteBtn}>
                  <FaTrash />
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default MenuTable;