import styles from "./DashboardHeader.module.css";
import { FaPlus, FaSearch } from "react-icons/fa";

function DashboardHeader({ openModal }) {
  return (
    <div className={styles.header}>

      {/* Left */}

      <div>

        <h1 className={styles.title}>
          Menu Management
        </h1>

        <p className={styles.subtitle}>
          Manage your restaurant offerings and availability.
        </p>

      </div>

      {/* Right */}

      <div className={styles.actions}>

        <div className={styles.searchBox}>

          <FaSearch className={styles.searchIcon} />

          <input
            type="text"
            placeholder="Search menu items..."
          />

        </div>
<button
    className={styles.addBtn}
    onClick={openModal}
>
    <FaPlus />

    Add New Item
</button>

      </div>

    </div>
  );
}

export default DashboardHeader;